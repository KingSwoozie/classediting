// ==UserScript==
// @name         Edit Specific Table Cell Based on Content
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Modify the third <td> where the first <td> contains "Bachelor Semester Project"
// @match        https://inscription.uni.lu/Inscriptions/Student/GuichetEtudiant/ProgressionCours
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        // Select all rows in the table
        let rows = document.querySelectorAll('table tbody tr');

        // Loop through each row
        rows.forEach(row => {
            let firstCell = row.querySelector('td:nth-of-type(1)');
            if (firstCell && firstCell.textContent.includes('Bachelor Semester Project')) {
                // Select the third <td> in the row
                let thirdCell = row.querySelector('td:nth-of-type(3)');
                if (thirdCell) {
                    thirdCell.textContent = '19.9'; // Replace with your desired text
                }
            }
            if (firstCell && firstCell.textContent.includes('Analysis')) {
                // Select the third <td> in the row
                let thirdCell = row.querySelector('td:nth-of-type(3)');
                if (thirdCell) {
                    thirdCell.textContent = '11.0'; // Replace with your desired text
                }
            }
        });
    };
})();
