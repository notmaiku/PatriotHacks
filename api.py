from flask import Flask, json, current_app
from MovieStar import RandomForestRegressor

api = Flask(__name__)


# http://localhost:5000/data
@api.route('/data', methods=['GET'])
def get_companies():
  return RandomForestRegressor()

if __name__ == '__main__':
    api.run(host="0.0.0.0")