// Copyright (c) 2020, Robin Rosenstock and contributors
// For license information, please see license.txt

frappe.ui.form.on('Exercise_sports_management', {
	refresh(frm) {
		// your code here
	}
});

frappe.ui.form.on("Exercise_sports_management", {
refresh: function(frm) {
    frm.add_custom_button(__("Create"), function() {
        var new_exercise_doc = frappe.model.get_new_doc('Execution_sports_management');
		new_exercise_doc.exercise = frm.doc.name;
		frappe.set_route('Form', 'Execution_sports_management', new_exercise_doc.name);
    }); 
}
});