from flask import Blueprint, jsonify, request
from validator import Validator
from data import events

events_bp = Blueprint('events', __name__)

EVENT_SCHEMA = {
    'name': {'required': True},
    'description': {'required': True},
    'startDate': {'required': True},
    'endDate': {'required': True},
    'location': {'required': True}
}

validator = Validator(EVENT_SCHEMA)


@events_bp.route('/events', methods=['GET'])
def get_events():
    return jsonify(events)


@events_bp.route('/events/<int:event_id>', methods=['GET'])
def get_single_event(event_id):
    event = next((item for item in events if item['id'] == event_id), None)
    if event is None:
        return jsonify({"error": "Event not found"}), 404
    return jsonify(event)


@events_bp.route('/events', methods=['POST'])
def add_event():
    new_event = request.json

    is_valid, message = validator.validate(new_event)
    if not is_valid:
        return jsonify({"error": message}), 400

    # Assign a new ID and append the event as before
    new_event['id'] = max([e['id'] for e in events]) + 1
    events.append(new_event)

    return jsonify(new_event), 201


@events_bp.route('/events/<int:event_id>', methods=['PUT'])
def update_event(event_id):
    update_data = request.json

    is_valid, message = validator.validate(update_data)
    if not is_valid:
        return jsonify({"error": message}), 400

    event = next((item for item in events if item['id'] == event_id), None)
    if event is None:
        return jsonify({"error": "Event not found"}), 404

    event.update(update_data)

    return jsonify(event)
