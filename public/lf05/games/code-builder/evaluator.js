(function () {
  "use strict";

  function normalize(code) {
    return String(code || "").replace(/\r\n/g, "\n").replace(/\t/g, "    ").trim();
  }

  function containsPattern(code, pattern) {
    const compact = code.replace(/\s+/g, " ").toLowerCase();
    return compact.includes(String(pattern).replace(/\s+/g, " ").toLowerCase());
  }

  function countPattern(code, pattern) {
    const needle = String(pattern).toLowerCase();
    let pos = 0, count = 0, source = code.toLowerCase();
    while ((pos = source.indexOf(needle, pos)) !== -1) { count++; pos += needle.length; }
    return count;
  }

  function basicSyntax(code) {
    const issues = [];
    const lines = code.split("\n");
    const pairs = [["(", ")"], ["[", "]"], ["{", "}"]];
    for (const [open, close] of pairs) {
      const a = (code.match(new RegExp("\\" + open, "g")) || []).length;
      const b = (code.match(new RegExp("\\" + close, "g")) || []).length;
      if (a !== b) issues.push(`Klammern ${open}${close} sind nicht ausgeglichen.`);
    }
    lines.forEach((line, index) => {
      const clean = line.trim();
      if (/^(if|elif|else|for|while)\b/.test(clean) && !clean.endsWith(":")) {
        issues.push(`Zeile ${index + 1}: Nach einer Kontrollstruktur fehlt vermutlich ein Doppelpunkt.`);
      }
      if (/^(if|elif|for|while)\b/.test(clean) && clean.includes(" = ") && !/[!<>=]=/.test(clean)) {
        issues.push(`Zeile ${index + 1}: In einer Bedingung wurde möglicherweise = statt == verwendet.`);
      }
    });
    const blockLines = lines.map((line, i) => ({ line, i })).filter(x => x.line.trim().endsWith(":"));
    for (const block of blockLines) {
      const base = block.line.match(/^\s*/)[0].length;
      const next = lines.slice(block.i + 1).find(x => x.trim());
      if (next && next.match(/^\s*/)[0].length <= base) issues.push(`Nach Zeile ${block.i + 1} fehlt möglicherweise ein eingerückter Codeblock.`);
    }
    return issues;
  }

  function evaluate(task, source, hintPenalty = 0, solutionShown = false) {
    const code = normalize(source);
    if (!code) return { score: 0, level: "Grundstruktur fehlt", syntax: [], concepts: [], logic: [], feedback: ["Es wurde noch kein Python-Code eingegeben."], capped: false };

    const syntaxIssues = basicSyntax(code);
    let syntaxScore = Math.max(0, 25 - syntaxIssues.length * 8);

    let conceptScore = 0;
    const concepts = task.conceptChecks.map(check => {
      let passed = check.patterns.every(pattern => containsPattern(code, pattern));
      // repeated concepts (input, if) are validated through logic checks instead of exact count here
      if (passed) conceptScore += check.points;
      return { label: check.label, passed };
    });
    conceptScore = Math.min(25, conceptScore);

    let logicScore = 0;
    const logic = task.logicChecks.map(check => {
      let passed;
      if (check.patterns.length > 1 && check.patterns.every(p => p === check.patterns[0])) {
        passed = countPattern(code, check.patterns[0]) >= check.patterns.length;
      } else {
        passed = check.patterns.some(pattern => containsPattern(code, pattern));
      }
      if (passed) logicScore += check.points;
      return { label: check.label, passed };
    });
    logicScore = Math.min(35, logicScore);

    let readability = 0;
    if (code.split("\n").length >= 2) readability += 5;
    if (/[a-zA-Z_][a-zA-Z0-9_]*\s*=/.test(code)) readability += 5;
    if (!/\b(eval|exec)\s*\(/.test(code)) readability += 5;

    let raw = syntaxScore + conceptScore + logicScore + readability;
    let score = Math.max(0, Math.round(raw - hintPenalty));
    let capped = false;
    if (solutionShown && score > 30) { score = 30; capped = true; }

    const feedback = [];
    if (syntaxIssues.length) feedback.push(...syntaxIssues);
    concepts.filter(x => !x.passed).forEach(x => feedback.push(`Erforderliches Konzept fehlt oder wurde nicht erkannt: ${x.label}.`));
    logic.filter(x => !x.passed).forEach(x => feedback.push(`Fachliche Anforderung noch nicht erfüllt: ${x.label}.`));
    if (!feedback.length) feedback.push("Die statische Prüfung erkennt alle hinterlegten Anforderungen. Vergleiche trotzdem Grenzwerte und Ausgaben mit der Aufgabenstellung.");

    const level = score >= 90 ? "Sehr gut gelöst" : score >= 70 ? "Gute Lösung" : score >= 40 ? "Teilweise korrekt" : "Grundstruktur noch nicht korrekt";
    return { score, level, syntaxScore, conceptScore, logicScore, readability, syntax: syntaxIssues, concepts, logic, feedback, capped };
  }

  window.CodeEvaluator = { evaluate, normalize };
})();
