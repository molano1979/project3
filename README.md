 #
 # Cardiac Arrest

## Description

GitHub: https://molano1979.github.io/project3/

Link to Heroku: https://cardiac-arrest-3.herokuapp.com/

```
An athlete wants to find difficult hills to run or ride in different areas.
```

![](https://github.com/molano1979/project3/blob/main/public/img/front.png)
![](https://github.com/molano1979/project3/blob/main/public/img/landingpge.png?raw=true)

### Based on google and strava APIs:

```javascript
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: origin,
    mapTypeId: "terrain",
    streetViewControl: false,
    showTooltip: false,
    showInfoWindow: false,
  });
```

### Marker's documentation was confusing to navigate.

```javascript
function addMarker(position) {
  if (markers.length == 0) {
    const marker = new google.maps.Marker({
      position,
      map,
      animation: google.maps.Animation.BOUNCE,
    });
    markers.push(marker);
```

## Pulling data from strava API:

```javascript
function getSegments(response) {
  const segmentsUrl = `https://www.strava.com/api/v3/segments/explore?bounds=${boundsArr}&activity_type=${activityType}&min_cat=${minClimb}&max_cat=${maxClimb}?access_token=${access_token}`;
  fetch(segmentsUrl, {
    method: "GET",
```

## Cards within javascript code

```html
<div class="col-sm this" >
          <div class="card">
          <div class="card-body">
          <p><strong>${name}</strong></p>
          <div><img src=${profileC} /></div>
          <p>Length of climb: ${climbL} feet.</p>
          <p>Average grade: ${avgGrade}%</p>
          <p><a href="https://www.google.com/maps/search/?api=1&query=${lats}%2C${lons}">Starting location</a></p></div>
          </div>
          </div>`;
`;
```

## Modal examples from the app

```html
<div
  class="modal fade"
  id="exampleModalCenter"
  tabindex="-1"
  role="dialog"
  aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">
          Cardiac Arrest Search Options
        </h5>

        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Activity type:
        <select id="activityType">
          <option value="running">Running</option>
          <option value="riding">Riding</option>
        </select>
        <br />
        Minimum climb rating:<input
          type="number"
          id="minClimb"
          value="2"
          min="2"
          max="4"
        />
        <br />
        Maximum climb rating:<input
          type="number"
          id="maxClimb"
          value="1"
          min="1"
          max="3"
        />
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          id="submit"
          onclick="hideFunction()"
        >
          Search and Close
        </button>
      </div>
    </div>
  </div>
</div>
```

### minimal styling

```css
.clear {
  background-color: #355c7d;
  border: none;
  border-radius: 4px;
  padding: 0.3em;
  color: white;
  transition: 0.2s;
}

.clear:hover {
  background-color: #f67280;
  color: white;
  border: none;
}
```

## Conclusion

Strava api limits your app key to 6 hours without automatic refresh function.
 
 
 <h2> 👩‍💻ﾠDevelopers</h2>
<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/corhydare" target="_blank">
      <img src=https://avatars.githubusercontent.com/u/57278348?v=4" width="150px" alt="Danila"/>
      <br />
      <sub><b>Danila Popov</b></sub><br/><br/>
      <sub><a href="https://www.linkedin.com/in/danilapopov/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-informational?style=for-the-badge&logo=LinkedIn&logoColor=white&color=informational"></a></sub>
      <br />
    </td>
     <td align="center"><a href="https://github.com/Savagescoles" target="_blank">
      <img src=https://avatars.githubusercontent.com/u/94992902?v=4" width="150px" alt="Ben"/>
      <br />
      <sub><b>Ben Savage</b></sub><br/><br/>
      <sub><a href="https://www.linkedin.com/in/benjamin-savage-b96237a3/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-informational?style=for-the-badge&logo=LinkedIn&logoColor=white&color=informational"></a></sub>
      <br />
    </td>
    <td align="center"><a href="https://github.com/PastaShock" target="_blank">
      <img src="https://avatars.githubusercontent.com/u/87203420?v=4" width="150px" alt="George"/>
      <br />
      <sub><b>George Pastushok</b></sub><br/><br/>
      <sub><a href="https://www.linkedin.com/in/george-pastushok-978621232/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-informational?style=for-the-badge&logo=LinkedIn&logoColor=white&color=informational"></a></sub>
      <br />
    </td>
      <td align="center"><a href="https://github.com/molano1979" target="_blank">
      <img src="https://avatars.githubusercontent.com/u/94487082?v=4" width="150px" alt="Diana"/>
      <br />
      <sub><b>Diana Cady</b></sub><br/><br/>
      <sub><a href="https://www.linkedin.com/in/diana-cady-8a8a0135/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-informational?style=for-the-badge&logo=LinkedIn&logoColor=white&color=informational"></a></sub>
      <br />
    </td>
  </table>
  <br/>

  
  
<p align="center">
  
