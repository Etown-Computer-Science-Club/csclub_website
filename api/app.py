from flask import Flask
from events import events_bp

app = Flask(__name__)
        'description': 'Join us for our upcoming interest meetings! The Computer Science Club is excited to announce that we will be hosting multiple meetings each week, each with a different focus. We want to find the best times for our potential members, so we\'re offering several options. Come and learn more about what our club has to offer and how you can get involved. We hope to see you there!',
        'startDate': '2023-08-28 19:00',
app.register_blueprint(events_bp)

if __name__ == '__main__':
    app.run(debug=True, port =8000)