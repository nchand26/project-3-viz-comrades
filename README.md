# Chicago Taxi Trips
**Project 3** \
**CS 424 - Visualization and Visual Analytics** \
 **Authors: Swetha Jayakumar, Nihal Chandra**

**Link to Webpage**: https://nchand26.github.io/project-3-viz-comrades/ 
<br><br>
![Homepage](https://github.com/nchand26/project-3-viz-comrades/blob/main/homepage.PNG)

This projects aims to explore the [Chicago Taxi Trips Dataset](https://data.cityofchicago.org/Transportation/Taxi-Trips/wrvz-psew) through interactive and informative Visualizations. 

**The Dataset** \
The dataset consists of taxi trips reported to the City of Chicago in its role as a regulatory agency. The original dataset consists of over 203M trips, of which we have taken a subset consisting of 99,457 trips and  23 attributes, spanning over a week. Each row in the dataset represents a taxi trip between September 1st, 2022 and September 7th, 2022. Each trip has a unique ID and timestamp associated with it. Let's look at a snapshot of the dataset below.

![Dataset Columns Screenshot](https://github.com/uic-vis/project-2-viz-comrades/blob/main/imgs/DatasetColumns.png)

**Fundamental Types of Information** 
  
An initial look at the dataset led to the following inferences:
- The dataset consisted of 99,457 entries primarily comprising of *float* and *object* datatypes.  
- **Identifers**: *Trip ID, Taxi ID*
- **Categories - Unordered**: *Payment Type, Company*
- **Measures**: *Trip Miles, Fare, Tips, Tolls, Extras, Trip Total*
- **Locations and Regions**: *Pickup Census Tract, Dropoff Census Tract, Pickup Community Area, Dropoff Community Area, Pickup Centroid Latitude, Pickup Centroid Longitude, Pickup Centroid Location, Dropoff Centroid Latitude, Dropoff Centroid Longitude, Dropoff Centroid Location*
- **Times and Dates**: *Trip Start Timestamp, Trip End Timestamp, Trip Seconds*

**Questions Answered**  
As a part of this project, the questions we tried to answer through visualization are:
- How many taxi trips do the popular taxi company's cabs make over the week?
- Is the Trip Fare positively correlated to the Trip Total?
- How do the tips relate to the Fare amount based on each taxi company?

**Baseline Apporach**
<br>The baseline approach followed to analyze and visualize these questions is as follows:

![Baseline Approach Screenshot](https://github.com/uic-vis/project-2-viz-comrades/blob/main/imgs/Baseline_approach.jpg)

Let's try to understand this baseline approach better by breaking it down to stepwise tasks. Let's take a look at the tasks performed at each stage of the project.

**Task 0: Setting up a web page**
<br>The [website](https://nchand26.github.io/project-3-viz-comrades/) has been created and hosted using [GitHub pages](https://pages.github.com/) and all the related files can be found in this repository.

**Task 1: Creating an empty page** 


**Using previous visualizations**

<br>**1.Domain Question**: How many taxi trips do the popular taxi company's cabs make over the week?
<br>**Data Attributes Used**:
- Trip Start Timestamp (Time)
- Trip Day (Time)
- Company (Categorical)

**Transformations Performed**: Extracted *'Trip Day'* from *'Trip Start Timestamp'* in the preprocessing stage using Pandas in Python.

**Data Question**: How does the total number of taxi trips taken by the 3 most popular taxi companies compare for each day of the week?

**Visual Encoding**
- Each Line to represent the change in the total number of trips of each taxi company.
- Colors to represent Taxi Company (Pink - Flash Cab, Teal - Taxi Affiliation Services, Purple - Sun Taxi)

**Representation**
<br>The visualization is represented through a line chart since we are comparing a quantitative attribute (total number of trips) vs a time based attribute (day of the week) over a catagorical attribute (taxi company). 

**Design Choice**
- Using a line chart was the most appropriate choice for this visualization since we were trying to show quantitative data over a period of time. 
- We used multiple lines since we were showing categorical data as well.
 
**Findings**
- We find that the number of trips for the Taxi affiliated service company does not change drastically over the week.
- Flash cab and Sun Taxi see few trips during the weekdays but many trips over the weekend.
  
![Number of Trips based Day of the Week](https://github.com/nchand26/project-3-viz-comrades/blob/main/FarevsTripTotalvsDay.PNG)


**2.Domain Question**: How does the Trip Fare compare with the Trip Total for the entire week?
<br>**Data Attributes Used**:
- Trip Start Timestamp (Time)
- Trip Day (Time)
- Trip Fare (Quantitative)
- Trip Total (Quantitative)

**Transformations Performed**: Extracted *'Trip Day'* from *'Trip Start Timestamp'* in the preprocessing stage using Pandas in Python.

**Data Question**: How does the Trip Fare compare with the Trip Total for each day of the week?

**Visual Encoding**
- Each vertical bar represents either the cumulative Fare or Trip total of that particular day of the week.
- The height of the bar is directly proportional to the Total amount (in $). 
- Pink color - Trip Fare, Purple Color - Trip Total

**Representation**
<br>The visualization is represented through a bar chart since we are comparing a quantitative attribute (Amount in $) vs a time based attribute (day of the week) over two quantitative attributes (Fare and Trip Total). 

**Task 3: Interaction Techniques**

**Interaction**
<br>When we hover over any bar, its color fades and it shows the corresponding cumulative Fare amount or Trip Total.

![Number of Trips based Day of the Week](https://github.com/nchand26/project-3-viz-comrades/blob/main/FarevsTripTotalvsDay.PNG) 

**3.Domain Question**: Is the Trip Fare positively correlated to the Trip Total?
<br>**Data Attributes Used**:
- Fare (Quantitative)
- Tips (Quantitative)
- Company (Categorical)

**Transformations Performed**: Extracted Count of trips belonging to a particular brushed area of the scatter plot.

**Data Question**: What is the correlation between The Fare and Tip amount for each company?

**Visual Encoding**
- Each point on the scatter plot represents a trip and is given a particular color based on its Taxi company.
- Each horizontal bar in the adjacent bar chart represents the count of trips included in the highlighted area of the scatter plot (by default - everything).
- The length of the bar is directly proportional to number of trips of that cab company. 
- Each color represents a particular cab company.

**Representation**
<br>The visualization is represented through mulliple linked views - a brushable scatterplot and a linked bar chart. The Scatterplot helps us understand the correlation between Tips and Fares. It is also the area where the user can brush over to select a smaller subset and visualize the corresponding change in the linked bar chart. The Bar chart contains Taxi companies compared with their corresponding highlighted count.

**Design Choice**
- We used a bar chart for this visualization because we were trying to compare two quantities belonging to different attributes such as fare and trip total.
- We reduce the opacity based on the user hovering over a bar so that the user knows which bar is selected. We show the tooltip to display to the user the exact amount in dollars.
 
**Findings**
- We find that the number of trips on Wednesday is extremely low when compared to other days.
- We see that there is a positive correlation between the trip total and the fare proving there the additional charges do not vary much over the week.

**Interaction**
<br>This visualization provides the interactive ability to brush over the scatter plot to highlight a specific portion of it, and on doing so, we can observe the corresponding change in the adjacent linked bar chart. To brush over the scatterplot, simply drag the mouse over the desired area and release it to observe the effect.

![Brushing effect on Visualization](https://github.com/nchand26/project-3-viz-comrades/blob/main/FarevsTipvsCompany.PNG) 

**Design Choice**
- We used a scatter plot to show the relationship between two quantities so that we can easily identify any trends.
- We use a bar chart to show the number of trips for each cab company since it is easier to see the count.
- The brushing interaction allows the user to select specific trips to see a more detailed view.
 
**Initial Findings**
- We see that for the most part tips and fare are positively correlated.
- We also see that people prefer to pay the tip in whole dollar amounts rather than in cents.

**Task 3: New multiple linked view**

**Task 4: New spatial view**
**5.Domain Question**: How many taxi pickups are there from each Community of Chicagoland?
<br>**Data Attributes Used**:
- Pickup Community Area (Spatial) 
- Pickup Centroid Latitude (Spatial)
- Pickup Centroid Longitude (Spatial) 
- Pickup Centroid Location (Spatial)

**Transformations Performed**: Aggregated the number of trips in each community area during the preprocessing stage using Pandas in Python.

**Data Question**: How does the number of taxi pickups compare in each community area of Chicago?

**Visual Encoding**
- A chloropeth map to represent the community boundaries of Chicago.
- Colors to represent the number of Taxi Trips taken in each community area.
- Horizontal Bars to represent and compare the number of trips from that area.

**Representation**
<br>This visualization provides the interactive ability to hover over a particular community in the map of Chicago and observe the number of trips from the corresponding community in the adjacent linked horizontal bar chart. To hover over the map, simply move the mouse over to the desired community area.

**Design Choice**
- Reason 1
- Reason 2

**Findings**
- Finding 1
- Finding 2
  
![Visualization Image]()

**Coding Environment** \
The entire code execution and visualization has been performed as follows:
- Data Preprocessing in a Jupyter notebook using Python.
- Visualization  and interaction in an Observable notebook using JavaScript and D3.
- Visualization and presentation on the Webpage through Visual Studio Code using HTML, D3 and JavaScript.
- Documentation in Github.

**Package Requirements** \
The following libraries were used for data preprocessing in Python.
- numpy
- pandas
