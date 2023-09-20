from flask import Blueprint, jsonify, request
from data import events

events_bp = Blueprint('events', __name__)


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
    new_event['id'] = max([e['id'] for e in events]) + 1  # Assign a new ID
    events.append(new_event)
    return jsonify(new_event), 201
