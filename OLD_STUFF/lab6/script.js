var tabarr;
        var flag = 1;
        var h;
        var w;
	var win;
        function build()
		{
            var tab = document.getElementById("tabl");
            h = document.getElementById("heig").value;
            w = document.getElementById("wid").value;
            tab.innerHTML = "";
            tabarr = new Array(h);
            for (let i = 0; i < h; i++)
			{
                tabarr[i] = new Array(w);
            }
            if ((h > 10) || (w > 10))
			{
                alert("Слишком большое поле!");
                return;
            }
            let siz = document.documentElement.clientWidth / w;
            for (let i = 0; i < h; i++)
			{
                let newline = document.createElement("tr");
                for (let j = 0; j < w; j++)
				{
                    let newcell = document.createElement("td");
                    
                    newcell.setAttribute("status", "empty");
                    tabarr[i][j] = newcell;
                    newline.appendChild(newcell);
                }
                tab.appendChild(newline);
            }

        }
        window.onload = function ()
		{
            document.getElementById("tabl").onclick = function (event)
			{
                if (event.target.hasChildNodes()) return;
                let img = document.createElement('img');
                let status;
                if (flag == 1)
				{
                    img.src = "../lab6/sprites/krest.png"
                    flag = 0;
                    event.target.status = "krest"
                } else
				{
                    img.src = "../lab6/sprites/crug.png"
                    flag = 1;
                    event.target.status = "crug"
                }
                img.style.height = "100%";
                img.style.width = "100%";
                event.target.appendChild(img);
                checkwin(event.target, 1, 0);
                checkwin(event.target, 0, 1);
                checkwin(event.target, 1, 1);
                checkwin(event.target, -1, 1);
            }
            function checkwin(thistd, xstep, ystep)
			{
                let x = +thistd.getAttribute("x");
                let y = +thistd.getAttribute("y");
                let lastturn;
                let wincount = 0;
                if (flag == 0) lastturn = 'krest';
                else lastturn = 'crug';
                while ((x - xstep >= 0) && (x - xstep < w) && (y - ystep < h) && (y - ystep >= 0) && (tabarr[y - ystep][x - xstep].status == lastturn))
				{
                    x -= xstep;
                    y -= ystep
                }
                wincount++;
                while ((x + xstep >= 0) && (x + xstep < w) && (y + ystep < h) && (y + ystep >= 0) && (tabarr[y + ystep][x + xstep].status == lastturn))
				{
                    wincount++;
                    x += xstep;
                    y += ystep;
                }
                if (wincount >= 5)
				{
                    if (lastturn == "krest")
                        alert("Red won!");
                    else
                        alert("Blue won!");
                    build();
                }
            }

        }
