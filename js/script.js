/* =============================
       Täydennä TODO-kohdat.
       ============================= */
			const wave = document.getElementById('waveText');
			wave.innerHTML = wave.textContent
				.split('')
				.map((char) => `<span>${char}</span>`)
				.join('');


			// TODO: lisää tapahtumankuuntelija checkboxille
			// kun käyttäjä klikkaa sitä, lisätään dark luokka bodylle

			// jos lokastoragesta löytyy avain  teema => lisää bodylle luokka dark
			// laita checkbox aktiiviseksi
			const checkbox = document.getElementById("checkbox");


            let savedTheme = localStorage.getItem('teema');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark');
                checkbox.checked = true;
            }
			// let localstoragentila = localStorage.getItem('teema');
			// console.log(localstoragentila);
			// if (localstoragentila === 'dark') {
			// 	document.body.classList.add('dark');
			// 	checkbox.checked = true;
			// }

			
			checkbox.addEventListener('change', () => {
				document.body.classList.toggle('dark');
				localStorage.setItem('teema', checkbox.checked ? 'dark' : 'light');
			});

			// TODO: tallenna käyttäjän toive teemasta localstorageen
			// kun lataat sivun, tarkista storage ja aseta teema

			// TODO: Wawe- tekstin pilkkominen