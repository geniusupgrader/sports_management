from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
      {
        "label":_("Sports Management"),
        "icon": "octicon file-code",
        "items": [
            {
              "type": "doctype",
              "name": "Execution_sports_management",
              "label": _("Execution"),
              "description": _("Description of Exercise"),
            },
            {
              "type": "doctype",
              "name": "Exercise_sports_management",
              "label": _("Exercise"),
              "description": _("Description of Execution"),
            },
            {
              "type": "doctype",
              "name": "Exercise_Type_sports_management",
              "label": _("Exercise Type"),
              "description": _("Description of Training"),
            },
            {
              "type": "doctype",
              "name": "Exercise_Group_sports_management",
              "label": _("Exercise Group"),
              "description": _("Description of Exercise Type"),
            },
            {
              "type": "doctype",
              "name": "Muscle_sports_management",
              "label": _("Muscle"),
              "description": _("Description of Exercise Type"),
            },
            {
              "type": "doctype",
              "name": "Equipment_sports_management",
              "label": _("Equipment"),
              "description": _("Description of Exercise Type"),
            },
            {
              "type": "doctype",
              "name": "Workout_sports_management",
              "label": _("Workout"),
              "description": _("Description of Workout"),
            },
            {
              "type": "doctype",
              "name": "Workout_Plan_sports_management",
              "label": _("Workout Plan"),
              "description": _("Description of Workout Plan"),
            }
        ]
      }
  ]
