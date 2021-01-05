// Copyright (c) 2020, Robin Rosenstock and contributors
// For license information, please see license.txt

frappe.ui.form.on("Exercise_sports_management", {
refresh: function(frm) {
    frm.add_custom_button(__("Create Execution"), function() {
        var new_exercise_doc = frappe.model.get_new_doc('Execution_sports_management');
		new_exercise_doc.exercise = frm.doc.name;
		frappe.set_route('Form', 'Execution_sports_management', new_exercise_doc.name);
    }); 
    frm.add_custom_button(__("Show Executions"), function() {
        frappe.set_route('List', 'Execution_sports_management', {'exercise': frm.doc.name1});
    }); 
}
});