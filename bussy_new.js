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

let isMobile = false
if (
	/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            navigator.userAgent
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            navigator.userAgent.substr(0, 4)
          )
    	) {
          isMobile = true;
        }


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

function randPos(pos) {
	if (Math.round(Math.random())) {
		pos.lat += Math.random()/8000
		pos.lng += Math.random()/8000
	} else {
		pos.lat -= Math.random()/8000
		pos.lng -= Math.random()/8000
		
	}
	return pos
}

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
			
			let sLLcsv = `${start.lat()},${start.lng()}`
			let eLLcsv = `${end.lat},${end.lng}`
			let url = `https://www.google.com/maps/dir/?api=1&origin=${sLLcsv}&destination=${eLLcsv}&travelmode=driving`
			
			if (isMobile) {
				window.location.assign(url)
			} else {
				window.open(url)
			}
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
			
function initMap(){
	
	let pos = {
		lat: 38.04481522028965,
		lng: 23.791080055375335
	}
	
	pos = randPos(pos)
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
