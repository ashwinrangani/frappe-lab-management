// Copyright (c) 2024, Ashwin Rangani and contributors
// For license information, please see license.txt

frappe.ui.form.on("Haemogram", {
    refresh(frm) {
       
        // Add default test entries if the table is empty
        if (!frm.doc.test_result || frm.doc.test_result.length === 0) {
            const default_tests = [
                { test: "WBC", normal_range: "15-1000" },
                { test: "RBC", normal_range: "12-100" }
            ];
            default_tests.forEach(test => {
                const child = frm.add_child("test_result");
                child.test = test.test;
                child.normal_range = test.normal_range;
            });
            frm.refresh_field("test_result");
        }
    },
    
    
    
});