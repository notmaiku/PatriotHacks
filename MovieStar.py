import numpy as np
import pandas as pd
# Using Skicit-learn to split data into training and testing sets
from sklearn.model_selection import train_test_split
import http.client
import json
import ast
import time
import random
from flask import jsonify

# def makeMockData(columns):
#     listOfSeries = []
#     for i in range(5000):
#         randomN = random.randint(0,99)
#         print(randomN)
#         listMock = []
#         for i in range(100):
#         # pd.Series(['Raju', 21, 'Bangalore', 'India'], index=dfObj.columns)
#             if i == randomN:
#                 listMock.append(1)
#             else:
#                 listMock.append(0)
#         #         Budget
#         listMock.append(random.randint(1,99)* 100000)
#         # Revenue
#         listMock.append(random.randint(1,99)* 1000000)
#
#         listOfSeries.append(pd.Series(listMock, index=columns))
#     return listOfSeries


random.seed(42)
print("starting...")
feature = pd.read_csv('PatriotHack.csv')
# print(features.head(5))
# mock = makeMockData(feature.columns)
# features = feature.append(mock, ignore_index=True)

features = feature

revenue = np.array(features['revenue'])
budget = np.array(features['budget'])
# Higher is better value
value = np.array(list(map(lambda x, y: x/y, revenue, budget)))
# for val in value:
    # print(val)


features = features.drop('revenue', axis = 1)
features = features.drop('budget', axis = 1)

feature_list = list(features.columns)

features = np.array(features)


# Split the data into training and testing sets
# train_features, test_features, train_labels, test_labels = train_test_split(features, value, test_size = 0.15, random_state = 42)
train_features, test_features, train_labels, test_labels = train_test_split(features, revenue, test_size = 0.15, random_state = 42)


print('Training Features Shape:', train_features.shape)
print('Training Labels Shape:', train_labels.shape)
print('Testing Features Shape:', test_features.shape)
print('Testing Labels Shape:', test_labels.shape)

# Import the model we are using
from sklearn.ensemble import RandomForestRegressor
# Instantiate model with 1000 decision trees
rf = RandomForestRegressor(n_estimators = 3000, random_state = 42)
# Train the model on training data
rf.fit(train_features, train_labels);
print("model trained")

def getTrainingDataFromMovieDB():
    conn = http.client.HTTPSConnection("api.themoviedb.org")

    Actors = ["Adam Driver","Adam Sandler","Arnold Schwarzenegger","Ben Affleck","Ben Stiller","Benedict Cumberbatch","Benedict Wong","Bill Murray","Brad Pitt","Bradley Cooper","Bruce Willis","Cameron Diaz","Carrie Fisher","Chadwick Boseman","Channing Tatum","Chris Evans","Chris Hemsworth","Chris Pine","Chris Pratt","Christian Bale","Clint Eastwood","Daisy Ridley","Danai Gurira","Daniel Radcliffe","Dave Bautista","Denzel Washington","Don Cheadle","Dustin Hoffman","Dwayne Johnson","Eddie Murphy","Elizabeth Olsen","Emma Watson","Ewan McGregor","George Clooney","Gwyneth Paltrow","Harrison Ford","Hugh Jackman","Ian McKellen","Idris Elba","Jack Black","Jennifer Lawrence","Jeremy Renner","Jim Carrey","John Boyega","John Travolta","Johnny Depp","Jon Favreau","Josh Brolin","Julia Roberts","Karen Gillan","Keanu Reeves","Kevin Costner","Kevin Hart","Kristen Stewart","Leonardo DiCaprio","Letitia Wright","Liam Neeson","Mark Hamill","Mark Ruffalo","Mark Wahlberg","Martin Freeman","Matt Damon","Mel Gibson","Meryl Streep","Michael Douglas","Mike Myers","Morgan Freeman","Natalie Portman","Nicolas Cage","Nicole Kidman","Orlando Bloom","Owen Wilson","Paul Bettany","Paul Rudd","Pom Klementieff","Reese Witherspoon","Robert De Niro","Robert Downey Jr.","Robin Williams","Rupert Grint","Ryan Reynolds","Samuel L. Jackson","Sandra Bullock","Scarlett Johansson","Sebastian Stan","Shia LaBeouf","Simon Pegg","Steve Carell","Steve Martin","Sylvester Stallone","Taylor Lautner","Tim Allen","Tom Cruise","Tom Hanks","Tom Hiddleston","Tom Holland","Vin Diesel","Will Ferrell","Will Smith","Zoe Saldana"]

    actorsData = {}

    for actor in Actors:

        time.sleep(1)

        actorNames = actor.split()

        payload = "{}"
        conn.request("GET", "/3/search/person?api_key=a1d4029fca28e4dde6a49837901aaa1a&language=en-US&query=" + actorNames[0] + "%20" + actorNames[1] + "&page=1&include_adult=false", payload)
        res = conn.getresponse()
        data = res.read()
        data = json.loads(data.decode("utf-8"))

        if data:
            print (data['results'][0]['id'])
            id = data['results'][0]['id']
            revenueForID = []
            budgetForID = []

            for movie in data['results'][0]['known_for']:

                movieID = str(movie['id'])
                conn.request("GET",
                             "/3/movie/" + movieID + "?api_key=a1d4029fca28e4dde6a49837901aaa1a&language=en-US")
                res = conn.getresponse()
                data = res.read()
                data = json.loads(data.decode("utf-8"))
                if(data):
                    if 'revenue' in data & 'budget' in data:
                        revenueForID.append(data['revenue'])
                        budgetForID.append(data['budget'])

            actorsData[actorNames[0] + "_" + actorNames[1]] = {}
            actorsData[actorNames[0] + "_" + actorNames[1]]['revenue'] = revenueForID
            actorsData[actorNames[0] + "_" + actorNames[1]]['budget'] = budgetForID

    return actorsData

def RandomForestRegressor():

    mockArray = [ 'Adam Sandler',
 'Brad Pitt',
 'Daisy Ridley',
 'Elizabeth Olsen',
 'Emma Watson',
 'Jennifer Lawrence',
 'Hugh Jackman',
 'Ryan Reynolds',
 'Scarlett Johansson',
 'Tom Cruise',
 'Tom Hanks' ]
    predictions = rf.predict(test_features)
    print(predictions)
    dict = {}
    counter = 0
    for a in mockArray:

        dict[a] = predictions[counter]
        counter = counter + 1

        # Calculate the absolute errors
    print(dict)
    return jsonify({'results': dict})
    # errors = abs(predictions - test_labels)
    # # Print out the mean absolute error (mae)
    # print('Mean Absolute Error:', round(np.mean(errors), 2), 'degrees.')
    #
    # # Calculate mean absolute percentage error (MAPE)
    # mape = 100 * (errors / test_labels)
    # # Calculate and display accuracy
    # accuracy = 100 - np.mean(mape)
    # print('Accuracy:', round(accuracy, 2), '%.')
    #
    # # Get numerical feature importances
    # importances = list(rf.feature_importances_)
    # # List of tuples with variable and importance
    # feature_importances = [(feature, round(importance, 2)) for feature, importance in zip(feature_list, importances)]
    # # Sort the feature importances by most important first
    # feature_importances = sorted(feature_importances, key = lambda x: x[1], reverse = True)
    # # Print out the feature and importances
    # print (type(feature_importances))
    # print(type(feature_importances[0]))
    # return jsonify({'result': feature_importances})


