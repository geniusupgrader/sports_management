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
              "name": "Exercise",
              "label": _("Exercise"),
              "description": _("Description of Exercise"),
            },
            {
              "type": "doctype",
              "name": "Execution",
              "label": _("Execution"),
              "description": _("Description of Execution"),
            },
            {
              "type": "doctype",
              "name": "Equipment",
              "label": _("Equipment"),
              "description": _("Description of Training"),
            },
            {
              "type": "doctype",
              "name": "Exercise Type",
              "label": _("Exercise Type"),
              "description": _("Description of Exercise Type"),
            },
            {
              "type": "doctype",
              "name": "Muscle",
              "label": _("Muscle"),
              "description": _("Description of Exercise Type"),
            },
            {
              "type": "doctype",
              "name": "Workout",
              "label": _("Workout"),
              "description": _("Description of Workout"),
            },
            {
              "type": "doctype",
              "name": "Workout Plan",
              "label": _("Workout Plan"),
              "description": _("Description of Workout Plan"),
            }
        ]
      }
  ]
