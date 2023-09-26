class Validator:
    def __init__(self, schema):
        self.schema = schema

    def validate(self, data):
        # Check for missing or unexpected fields
        for field in data:
            if field not in self.schema:
                return False, f"Unexpected field found: {field}"
        for field, properties in self.schema.items():
            if properties.get('required') and field not in data:
                return False, f"Missing property: {field}"
<<<<<<< HEAD
        return True, ""
=======
        return True, ""
>>>>>>> 5acd64d (added validation for put requests)
