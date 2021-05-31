marker =
    display: ['block', 'inline', 'inline-block', 'list-item', 'flex', 'grid'],
    position: ['relative', 'absolute', 'fixed'],
    transform: []

exclusion = []












document.querySelectorAll('body *:not(script)').forEach (i) ->
	i.classList.add('marker')

document.querySelector('body').classList.add('marker')

for i in exclusion
	document.querySelectorAll(i).forEach (i) ->
		i.classList.remove('marker')

marker_go = ->
	document.querySelectorAll('.marker').forEach (i) ->
		style = getComputedStyle(i)
		for ii in Object.keys(marker)
			if style[ii] != 'none'
				i.setAttribute('marker_' + ii, '')
				for iii in marker[ii]
					if style[ii] == iii
						i.setAttribute('marker_' + ii, iii)

marker_go()

window.onresize = (event) ->
	marker_go()