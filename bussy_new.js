/*
						I FUCKING HATE JAVASCRIPT
							  a poem by me
					    
						I was but a wee lad
						And needed to make a website
						Basic knowledge is all i had
						And could not quite make things right
						I was needed in a team though
						So I had to learn
						We had to have something to show
						Needed something to earn
						Started working very late
						Very late indeed
						Something I began to hate
						No warnings did i heed
						JavaScript is weird
						I did know that much
						But it is worse than I feared
						How many errors do I have to catch
						Like why is that undefined
						Why is this not working
						Where could I possibly find
						An Indian who is good at talking
						What is an arrow function anyways
						And why should I care
						Why have I thought of 30 different ways
						To harm my hardware
						Why exactly does true == '1' I ask
						As my fist starts to tense
						Is it such a monumental task
						To just follow common sense
						Why is the default behavior
						Casting everything to strings
						I think we need a savior
						To keep away these monstrous things
						Last but not least typing
						This even the devil fears
						I do not know who started liking
						The times when logic dissapears
						And yet why is it so confusing
						I ask myself every day
						I do not find this amusing
						Kill myself, I shortly may
						For I believe anything is better
						Anything at all
						Even writing a suicide letter
						In a McDonalds bathroom stall
						Although i have yet to touch the company
						Whose name i shall not speak
						Has an API oh so luckily
						Exactly what I seek
						I could even use it
						Oh I surely can
						That is if I do not lose it
						And become a feral man
						Which would be preferable I jest
						Although it might be true
						JavaScript is trying its best
						But I do not know for who
						As you guess I did not get far
						In my quest to understand
						It would be easier to drive a car
						Without driving on any land
						Granted a lot of what I say
						Could be considered bloated
					   	But one final fact I shall lay
						I would prefer getting roasted
						It would be a better future
						One with more meaning
						I advise you to keep away
						Lest you want to hang from the ceiling
*/

const sel = document.getElementById('SELECTION')
const rb = document.getElementById('refresh_button')
const ftypes = Array.from(document.querySelectorAll('#FUEL_SELECT > *'))
const stations = document.getElementById('STATIONS')
const d_input = document.getElementById('dist_input')
const d_input_tt = document.querySelector('.range_tt')

const offset = d_input.clientWidth/(parseInt(d_input.max) - parseInt(d_input.min));
const thumbWidth = 5
let MAP = document.getElementById('MAP')

let map
let service
let directionsService
let directionRenderer
let usr_marker

let icons = {
	'Gas stations': 'red-pin.png', 
	'Charging stations': 'blue-pin.png', 
	'Self': 'black-pin.png'
}

function updRangeVal() {
	let val = d_input.value
	let d_input_n = d_input.valueAsNumber
	let max = parseInt(d_input.max)
	let min = parseInt(d_input.min)
	let pad = Math.round(parseInt(sel.offsetWidth)*0.27)
	d_input_tt.style.left = pad + ((d_input_n - min) * offset - d_input_tt.offsetWidth / 2 - (d_input_n / max - min - 0.5) * thumbWidth) + 'px'
	d_input_tt.innerHTML = `${d_input.value/10}` + 'km'
}

updRangeVal()

class StationsManager {
	constructor() {
		this.stations = []
		this.markers = []
		this.usr_pos = 0
		this.query = 'Charging stations'
		
	}
	
	populate(stations, status) {
		for (let [ind, station] of this.stations.entries()) {
			station.marker.setMap(null)
			station.removeFromCont()
		}
		this.stations = []
		
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			for (let i = 0; i < stations.length; i++) {
				let place = stations[i]
				
				let marker_pos = {
					lat: place.geometry.location.lat(),
					lng: place.geometry.location.lng()
				}

				let R = 6371.071
				let usr_lat = this.usr_pos.lat*Math.PI/180
				let usr_lng = this.usr_pos.lng*Math.PI/180
				let plc_lat = marker_pos.lat*Math.PI/180
				let plc_lng = marker_pos.lng*Math.PI/180
				
				let dlat = usr_lat - plc_lat
				let dlng = usr_lng - plc_lng
				
				let d = 2*R*Math.asin(Math.sqrt(Math.sin(dlat/2)*Math.sin(dlat/2) + Math.cos(usr_lat)*Math.cos(plc_lat)*Math.sin(dlng/2)*Math.sin(dlng/2)))

				if (!(d*10 <= d_input.value)) {
					continue
				}
				let marker = new google.maps.Marker({
					position: marker_pos, 
					map: map,
					icon: icons[station_manager.query]
					})
				
				let addr = place.formatted_address
				addr = addr.substring(0, addr.length - 8).replace('000 00', '')
				let station = new Station(place.name, addr, d.toFixed(2), 'el', marker)
				
			}
			this.sort_stations()
		}
	}
	
	sort_stations() {
		this.stations = this.stations.sort(this.comp_dist)
		for (let station of this.stations) {
			station.appendToCont()
		}
	}
	
	comp_dist(s1, s2) {
		
		if (s1.d == s2.d) {
			return 0
		} else {
			return ((s1.d > s2.d) ? 1 : -1)
		}	
	}
	
	
}
const station_manager = new StationsManager()

class Station {
	
	constructor(name, addr, d, ftype, marker) {
		this.name = name
		this.d = d
		this.addr = addr
		this.ftype = ftype
		this.marker = marker
		this.stations_inst = ''
		station_manager.stations.push(this)
		
		this.makeStation()
	}
	
	makeStation() {
		
		let new_station = document.createElement('div')
		let title = document.createElement('p')
		let cont = document.createElement('div')
		let dist = document.createElement('p')
		let addr = document.createElement('p')
		let btn = document.createElement('button')
		
		new_station.classList.add('station_inst')
		title.classList.add('station_name')
		cont.classList.add('cont')
		dist.classList.add('dist')
		addr.classList.add('address')
		title.innerHTML = this.name
		dist.innerHTML = this.d + 'km'
		addr.innerHTML = this.addr
		btn.innerHTML = 'View Route >'
		
		new_station.appendChild(title)
		new_station.appendChild(cont)
		new_station.appendChild(btn)
		cont.appendChild(dist)
		cont.appendChild(addr)
		
		
		this.stations_inst = new_station
		
		btn.addEventListener('click', (evt) => {
			let inst = evt.target.parentNode
			let station = Array.from(station_manager.stations.filter(station => station.stations_inst == inst))[0]
			
			let start = station_manager.usr_pos
			let end = station.marker.getPosition()
			
			let sLLcsv = `${start.lat},${start.lng}`
			let eLLcsv = `${end.lat()},${end.lng()}`
			let url = `https://www.google.com/maps/dir/?api=1&origin=${sLLcsv}&destination=${eLLcsv}&travelmode=driving`
			
			/*
			window.open(url)
			*/
			window.parent.location.href = url
			MAP.scrollIntoView({behavior: 'smooth'})
			/*
			let p = station.marker.getPosition()
			
			let start = new google.maps.LatLng(station_manager.usr_pos.lat, station_manager.usr_pos.lng) 
			let end = new google.maps.LatLng(p.lat(), p.lng())
			
			
			directionsService.route({
				origin: start,
				destination: end,
				travelMode: google.maps.TravelMode.DRIVING,
				})
				.then((response) => {
				  directionRenderer.setDirections(response);
				})
			*/

		})
	}
	
	appendToCont() {
		stations.appendChild(this.stations_inst)
	}
	removeFromCont() {
		stations.removeChild(this.stations_inst)
	}
	
}

function load_google_api() {
	let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBRhQFRZnOH8nNthHlICZDQJ7vbt_jFeAU&libraries=places&callback=api'
    document.head.appendChild(script)
}

window.onload = load_google_api

function api() {
	map = new google.maps.Map(MAP, {
				center: {lat: 0, lng: 0},
				zoom: 11,
				})
	service = new google.maps.places.PlacesService(map);
	
	directionsService = new google.maps.DirectionsService();
    	directionRenderer = new google.maps.DirectionsRenderer();
	directionRenderer.setMap(map)
	
	initMap()
}
			
window.onmessage = (evt) => {
	
	let pos = evt.data
	console.log(pos)
	
	station_manager.usr_pos = pos
	
	map.setCenter(pos)

	if (usr_marker) {
		usr_marker.setMap(null)
	}
	
	usr_marker = new google.maps.Marker({
		position: pos,
		map: map,
		icon: icons['Self']
	})

	let req = {
		location: pos,
		radius: d_input.value*100,
		query: station_manager.query
	}




	service.textSearch(req, (stations, status) => {station_manager.populate(stations, status)})

	}

rb.addEventListener('click', () => {
	MAP.scrollIntoView({behavior: 'smooth'})
	initMap()
	
})

for (let t of ftypes) {
	t.addEventListener('click', (event) => {
		let sel_type = event.target
		
		let other_type = ftypes.filter(type => type != sel_type)
		
		if (sel_type.classList.contains('selected_button')) {
			return
		}
		sel_type.classList.add('selected_button')
		other_type[0].classList.remove('selected_button')
		
		station_manager.query = (event.target.innerHTML == 'GAS') ? 'Gas stations' : 'Charging stations'
	})
}
