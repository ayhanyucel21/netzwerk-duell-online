'use strict';

/*
=========================================================
 FISI LERNEN
 Central Data Loader
=========================================================

 Kullanım örnekleri:

 const courses = await FisiLoader.getCourses();

 const tags = await FisiLoader.getTags({
     courseId: 'lf05'
 });

 const lessons = await FisiLoader.getLessons({
     courseId: 'lf05',
     tagId: 'tag7'
 });

 const questions = await FisiLoader.getQuestions({
     courseId: 'lf05',
     tagId: 'tag7'
 });

=========================================================
*/

const FisiLoader = (() => {

    const API_BASE = '/api/admin';

    /*
    =====================================================
     CACHE
    =====================================================
    */

    const cache = new Map();

    const CACHE_TIME = 30 * 1000;


    /*
    =====================================================
     INTERNAL HELPERS
    =====================================================
    */

    function normalize(value) {

        return String(value ?? '')
            .trim()
            .toLowerCase();

    }


    function cacheKey(collection) {

        return `fisi:${collection}`;

    }


    function getCached(collection) {

        const key = cacheKey(collection);

        const cached = cache.get(key);

        if (!cached) {
            return null;
        }

        const expired =
            Date.now() - cached.timestamp > CACHE_TIME;

        if (expired) {

            cache.delete(key);

            return null;

        }

        return cached.data;

    }


    function setCached(collection, data) {

        cache.set(
            cacheKey(collection),
            {
                timestamp: Date.now(),
                data
            }
        );

    }


    /*
    =====================================================
     FETCH COLLECTION
    =====================================================
    */

    async function fetchCollection(
        collection,
        options = {}
    ) {

        const {
            useCache = true
        } = options;


        if (useCache) {

            const cached =
                getCached(collection);

            if (cached) {

                return cached;

            }

        }


        try {

            const response = await fetch(
                `${API_BASE}/${collection}`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json'
                    }
                }
            );


            if (!response.ok) {

                throw new Error(
                    `HTTP ${response.status}`
                );

            }


            const result = await response.json();


            const items =
                Array.isArray(result)
                    ? result
                    : Array.isArray(result.items)
                        ? result.items
                        : [];


            setCached(
                collection,
                items
            );


            return items;


        } catch (error) {

            console.error(
                `[FisiLoader] ${collection} konnte nicht geladen werden:`,
                error
            );


            return [];

        }

    }


    /*
    =====================================================
     GENERAL FILTER
    =====================================================
    */

    function filterItems(
        items,
        filters = {}
    ) {

        return items.filter(
            item => {

                for (
                    const [key, value]
                    of Object.entries(filters)
                ) {

                    if (
                        value === undefined ||
                        value === null ||
                        value === ''
                    ) {

                        continue;

                    }


                    /*
                    -------------------------------
                    Array Filter
                    -------------------------------
                    */

                    if (
                        Array.isArray(value)
                    ) {

                        if (
                            !value.includes(
                                item[key]
                            )
                        ) {

                            return false;

                        }

                        continue;

                    }


                    /*
                    -------------------------------
                    Standard Filter
                    -------------------------------
                    */

                    if (
                        normalize(item[key]) !==
                        normalize(value)
                    ) {

                        return false;

                    }

                }


                return true;

            }
        );

    }


    /*
    =====================================================
     PUBLISHED FILTER
    =====================================================
    */

    function onlyPublished(items) {

        return items.filter(
            item =>
                !item.status ||
                item.status === 'published'
        );

    }


    /*
    =====================================================
     SORT
    =====================================================
    */

    function sortItems(items) {

        return [...items].sort(
            (a, b) => {

                const orderA =
                    Number(
                        a.order ??
                        a.menuOrder ??
                        a.number ??
                        9999
                    );


                const orderB =
                    Number(
                        b.order ??
                        b.menuOrder ??
                        b.number ??
                        9999
                    );


                if (
                    orderA !== orderB
                ) {

                    return orderA - orderB;

                }


                const titleA =
                    String(
                        a.title ??
                        a.code ??
                        ''
                    );


                const titleB =
                    String(
                        b.title ??
                        b.code ??
                        ''
                    );


                return titleA.localeCompare(
                    titleB,
                    'de'
                );

            }
        );

    }


    /*
    =====================================================
     COURSES
    =====================================================
    */

    async function getCourses(
        filters = {}
    ) {

        const items =
            await fetchCollection(
                'courses'
            );


        return sortItems(
            filterItems(
                onlyPublished(items),
                filters
            )
        );

    }


    /*
    =====================================================
     SINGLE COURSE
    =====================================================
    */

    async function getCourse(
        identifier
    ) {

        const courses =
            await getCourses();


        return courses.find(
            course =>

                normalize(course.id) ===
                normalize(identifier)

                ||

                normalize(course.code) ===
                normalize(identifier)

        ) || null;

    }


    /*
    =====================================================
     TAGS
    =====================================================
    */

    async function getTags(
        filters = {}
    ) {

        const items =
            await fetchCollection(
                'tags'
            );


        return sortItems(
            filterItems(
                onlyPublished(items),
                filters
            )
        );

    }


    /*
    =====================================================
     TOPICS
    =====================================================
    */

    async function getTopics(
        filters = {}
    ) {

        const items =
            await fetchCollection(
                'topics'
            );


        return sortItems(
            filterItems(
                onlyPublished(items),
                filters
            )
        );

    }


    /*
    =====================================================
     LESSONS
    =====================================================
    */

    async function getLessons(
        filters = {}
    ) {

        const items =
            await fetchCollection(
                'lessons'
            );


        return sortItems(
            filterItems(
                onlyPublished(items),
                filters
            )
        );

    }


    /*
    =====================================================
     QUESTIONS
    =====================================================
    */

    async function getQuestions(
        filters = {}
    ) {

        const items =
            await fetchCollection(
                'questions'
            );


        return filterItems(
            onlyPublished(items),
            filters
        );

    }


    /*
    =====================================================
     RANDOM QUESTIONS
    =====================================================
    */

    async function getRandomQuestions(
        filters = {},
        count = 20
    ) {

        const questions =
            await getQuestions(
                filters
            );


        return shuffle(
            questions
        ).slice(
            0,
            Math.max(
                0,
                count
            )
        );

    }


    /*
    =====================================================
     GAMES
    =====================================================
    */

    async function getGames(
        filters = {}
    ) {

        const items =
            await fetchCollection(
                'games'
            );


        return sortItems(
            filterItems(
                onlyPublished(items),
                filters
            )
        );

    }


    /*
    =====================================================
     QUIZZES
    =====================================================
    */

    async function getQuizzes(
        filters = {}
    ) {

        const items =
            await fetchCollection(
                'quizzes'
            );


        return sortItems(
            filterItems(
                onlyPublished(items),
                filters
            )
        );

    }


    /*
    =====================================================
     PAGES
    =====================================================
    */

    async function getPages(
        filters = {}
    ) {

        const items =
            await fetchCollection(
                'pages'
            );


        return sortItems(
            filterItems(
                onlyPublished(items),
                filters
            )
        );

    }


    /*
    =====================================================
     SINGLE PAGE
    =====================================================
    */

    async function getPage(
        slug,
        courseId = ''
    ) {

        const pages =
            await getPages();


        return pages.find(
            page => {

                const slugMatch =

                    normalize(page.slug) ===
                    normalize(slug);


                if (!courseId) {

                    return slugMatch;

                }


                return (

                    slugMatch

                    &&

                    normalize(page.courseId) ===
                    normalize(courseId)

                );

            }

        ) || null;

    }


    /*
    =====================================================
     SETTINGS
    =====================================================
    */

    async function getSettings() {

        const items =
            await fetchCollection(
                'settings'
            );


        return items[0] || {};

    }


    /*
    =====================================================
     APPLY DESIGN SETTINGS
    =====================================================
    */

    async function applySettings() {

        const settings =
            await getSettings();


        const root =
            document.documentElement;


        if (
            settings.primaryColor
        ) {

            root.style.setProperty(
                '--primary',
                settings.primaryColor
            );

        }


        if (
            settings.secondaryColor
        ) {

            root.style.setProperty(
                '--secondary',
                settings.secondaryColor
            );

        }


        if (
            settings.radius !== undefined
        ) {

            root.style.setProperty(
                '--radius',
                `${settings.radius}px`
            );

        }


        if (
            settings.fontFamily
        ) {

            root.style.setProperty(
                '--font-family',
                settings.fontFamily
            );


            document.body.style.fontFamily =
                settings.fontFamily;

        }


        if (
            settings.siteTitle
        ) {

            const siteName =
                document.querySelector(
                    '[data-site-title]'
                );


            if (siteName) {

                siteName.textContent =
                    settings.siteTitle;

            }

        }


        return settings;

    }


    /*
    =====================================================
     FULL COURSE DATA
    =====================================================
    */

    async function getCourseData(
        courseId
    ) {

        const [
            course,
            tags,
            topics,
            lessons,
            questions,
            games,
            quizzes,
            pages
        ] = await Promise.all([

            getCourse(courseId),

            getTags({
                courseId
            }),

            getTopics({
                courseId
            }),

            getLessons({
                courseId
            }),

            getQuestions({
                courseId
            }),

            getGames({
                courseId
            }),

            getQuizzes({
                courseId
            }),

            getPages({
                courseId
            })

        ]);


        return {

            course,
            tags,
            topics,
            lessons,
            questions,
            games,
            quizzes,
            pages

        };

    }


    /*
    =====================================================
     TAG DATA
    =====================================================
    */

    async function getTagData(
        courseId,
        tagId
    ) {

        const [
            tags,
            topics,
            lessons,
            questions
        ] = await Promise.all([

            getTags({
                courseId
            }),

            getTopics({
                courseId,
                tagId
            }),

            getLessons({
                courseId,
                tagId
            }),

            getQuestions({
                courseId,
                tagId
            })

        ]);


        const tag =
            tags.find(
                item =>
                    normalize(item.id) ===
                    normalize(tagId)
            ) || null;


        return {

            tag,
            topics,
            lessons,
            questions

        };

    }


    /*
    =====================================================
     QUESTION SHUFFLE
    =====================================================
    */

    function shuffle(items) {

        const result =
            [...items];


        for (
            let i = result.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() *
                    (i + 1)
                );


            [
                result[i],
                result[j]

            ] = [

                result[j],
                result[i]

            ];

        }


        return result;

    }


    /*
    =====================================================
     SHUFFLE ANSWERS
    =====================================================
    */

    function shuffleQuestionOptions(
        question
    ) {

        if (
            !question ||
            !Array.isArray(
                question.options
            )
        ) {

            return question;

        }


        const options =
            question.options.map(
                option => ({
                    value: option,
                    correct:
                        String(option) ===
                        String(
                            question.answer
                        )
                })
            );


        const shuffled =
            shuffle(options);


        return {

            ...question,

            options:
                shuffled.map(
                    item =>
                        item.value
                ),

            correctIndex:
                shuffled.findIndex(
                    item =>
                        item.correct
                )

        };

    }


    /*
    =====================================================
     CLEAR CACHE
    =====================================================
    */

    function clearCache(
        collection = null
    ) {

        if (!collection) {

            cache.clear();

            return;

        }


        cache.delete(
            cacheKey(
                collection
            )
        );

    }


    /*
    =====================================================
     RELOAD
    =====================================================
    */

    async function reload(
        collection
    ) {

        clearCache(
            collection
        );


        return fetchCollection(
            collection,
            {
                useCache: false
            }
        );

    }


    /*
    =====================================================
     CONNECTION TEST
    =====================================================
    */

    async function isAvailable() {

        try {

            const response =
                await fetch(
                    `${API_BASE}/courses`,
                    {
                        method: 'GET',
                        headers: {
                            Accept:
                                'application/json'
                        }
                    }
                );


            return response.ok;

        } catch {

            return false;

        }

    }


    /*
    =====================================================
     PUBLIC API
    =====================================================
    */

    return {

        getCourses,
        getCourse,

        getTags,
        getTopics,
        getLessons,

        getQuestions,
        getRandomQuestions,

        getGames,
        getQuizzes,

        getPages,
        getPage,

        getSettings,
        applySettings,

        getCourseData,
        getTagData,

        shuffle,
        shuffleQuestionOptions,

        clearCache,
        reload,

        isAvailable

    };

})();


/*
=========================================================
 GLOBAL EXPORT
=========================================================
*/

window.FisiLoader =
    FisiLoader;


/*
=========================================================
 AUTO APPLY GLOBAL SETTINGS
=========================================================
*/

document.addEventListener(
    'DOMContentLoaded',
    async () => {

        try {

            await FisiLoader.applySettings();

        } catch (error) {

            console.warn(
                '[FisiLoader] Design-Einstellungen konnten nicht angewendet werden.',
                error
            );

        }

    }
);