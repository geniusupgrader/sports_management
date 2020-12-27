// Copyright (c) 2020, Robin Rosenstock and contributors
// For license information, please see license.txt

frappe.ui.form.on('Execution_sports_management', {
	refresh(frm) {
		// your code here
	}
});

	frappe.ui.form.on("Execution_sports_management", {
	"exercise": function(frm) {
	
		if (frm.doc.exercise_type !== "" && frm.doc.exercise_group !== ""){
		frm.fields_dict['exercise'].get_query = function() {
			return {
				filters: {
					'exercise_type': frm.doc.exercise_type,
					'exercise_series': frm.doc.exercise_series
				}
			};
		};  
		}else{
		
		if (frm.doc.exercise_type === "" && frm.doc.exercise_group !== ""){
		frm.fields_dict['exercise'].get_query = function() {
			return {
				filters: {
					'exercise_series': frm.doc.exercise_series
				}
			};
		};  
		}
		
		if (frm.doc.exercise_type !== "" && frm.doc.exercise_group === ""){
		frm.fields_dict['exercise'].get_query = function() {
			return {
				filters: {
					'exercise_type': frm.doc.exercise_type
				}
			};
		};  
		}
		}
	
	}
	});
	
	
	// for updating the image, when exercise is selected
	frappe.ui.form.on("Execution_sports_management", {
	'exercise': function(frm) {
		frappe.db.get_value('Exercise_sports_management', frm.doc.exercise, 'attach_the_image')
		.then(r => {
			cur_frm.set_value('attach_image', r.message.attach_the_image)
		})
	frm.refresh()
	}
	});
	
	

	frappe.ui.form.on("Execution_sports_management", {
	refresh: function(frm) {
		frm.add_custom_button(__("Start"), function() {
			frm.set_value('time', frappe.datetime.now_time());
		}); 
	}
	});

	

	frappe.ui.form.on("Execution_sports_management", {
	refresh: function(frm) {
		frm.add_custom_button(__("Stop"), function() {
			frm.set_value('stop_time', frappe.datetime.now_time());
		}); 
	}
	});

	
	
	// Achtung, komischerweise, lässt sich dann nicht mehr in der App abspeichern?
	// Überprüfung beim Speichern, ob Stop Zeit später ist als Start Zeit
	frappe.ui.form.on("Execution_sports_management", {
	validate: function(frm) {
		if(frm.doc.stop_time < frm.doc.time) {
			msgprint('Stop Time must be later');
			validated = false;
		}
	}
	});
	
	
	
	/* Versuch um vom Table Multiselect zu filtern (muscles)
	frappe.ui.form.on("Execution_sports_management", {
	onload: function(frm) {
	cur_frm.fields_dict.exercise.get_query = function(doc,cdt,cdn) {
			return {
				filters:[
					['muscles', '=', "Rücken"],
					//['exercise_type', '=', "Krafttraining"]
				]
			}
		}}});
		
	*/