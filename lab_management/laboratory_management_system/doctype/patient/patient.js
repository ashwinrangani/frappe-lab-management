// Copyright (c) 2024, Ashwin Rangani and contributors
// For license information, please see license.txt

frappe.ui.form.on("Patient", {
	refresh(frm) {
		frm.add_custom_button('Haemogram', () => {
			frappe.new_doc('Haemogram', {
				patient: frm.doc.name
			});
		});
	},
	on_submit(frm) {
		frm.add_custom_button('View Haemogram', () => {
			// Navigate to the Haemogram list filtered by the patient
			frappe.set_route('List', 'Haemogram', {
				patient: frm.doc.name
			});
		});
	}
});
