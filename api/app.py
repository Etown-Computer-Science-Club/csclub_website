from flask import Flask

app = Flask(__name__)


# define a route like so:
# @app.route(PATH HERE)
# Right below the route, define a function that returns a message


if __name__ == '__main__':
    app.run(debug=True)
