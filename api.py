from flask import Flask, json
from MovieStar import RandomForestRegressor
api = Flask(__name__)

@api.route('/data', methods=['GET'])
def get_companies():
  return RandomForestRegressor()

if __name__ == '__main__':
    api.run()