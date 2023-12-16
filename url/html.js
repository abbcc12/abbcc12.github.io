console.log("html.js");
function show1() {
	document.getElementById("body").innerHTML=`	
	<div class="main">
		<h2><span id="h2"></span></h2>
		<textarea id="textarea" class="textarea" rows="2" oninput="url(this.value);"></textarea>
		<div class="urlq1">
			<input type="checkbox" id="blankpage" checked onclick="url();"><span id="after1"></span>
			<div></div>
			<input type="checkbox" id="auto" checked onclick="url();"><span id="after15"></span>
			<div></div>
			<input type="checkbox" id="starttime"
				onclick="if(document.getElementById('starttime').checked==true){document.getElementById('s-time').style.display='block'}else{document.getElementById('s-time').style.display='none'};url();"><span
				id="after2"></span>
			<div id="s-time" style="display: none;">
				<span><input type="number" id="year" min="1000" max="9999" oninput="
					if (this.value>=0&&this.value<=9999) {
						this.value=Math.floor(this.value);
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>9999) {
								this.value=\`\$\{this.value[0]+this.value[1]+this.value[2]+this.value[3]\}\`
							}else{
								this.value=''
							}
						}
					}
					url();
					"><span id="after3"></span></span>
				<span><input type="number" id="month" min="1" max="12" oninput="
					if (this.value>=0&&this.value<=12) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>12&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='12';
							}
						}
					}
					url();
					"><span id="after4"></span></span>
				<span><input type="number" id="date" min="1" max="31" oninput="
					if (this.value>=0&&this.value<=31) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>31&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='31';
							}
						}
					}
					url();
					"><span id="after5"></span></span>
				<span><input type="number" id="hour" min="0" max="23" oninput="
					if (this.value>=0&&this.value<=23) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>23&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='23';
							}
						}
					}
					url();
					"><span id="after6"></span></span>
				<span><input type="number" id="minute" min="0" max="59" oninput="
					if (this.value>=0&&this.value<=59) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>59&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='59';
							}
						}
					}
					url();
					"><span id="after7"></span></span>
				<span><input type="number" id="second" min="0" max="59" oninput="
					if (this.value>=0&&this.value<=59) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>59&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='59';
							}
						}
					}
					url();
					"><span id="after8"></span></span>
			</div>
			<div></div>
			<input type="checkbox" id="endtime"
				onclick="if(document.getElementById('endtime').checked==true){document.getElementById('e-time').style.display='block'}else{document.getElementById('e-time').style.display='none'};url();"><span
				id="after9"></span>
			<div id="e-time" style="display: none;">
				<input type="number" id="eyear" min="1" max="9999" oninput="
				if (this.value>=0&&this.value<=9999) {
					this.value=Math.floor(this.value);
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>9999) {
							this.value=\`\$\{this.value[0]+this.value[1]+this.value[2]+this.value[3]\}\`
						}else{
							this.value=''
						}
					}
				}
				url();
				"><span id="after3"></span>
				<input type="number" id="emonth" min="1" max="12" oninput="
				if (this.value>=0&&this.value<=12) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>12&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='12';
						}
					}
				}
				url();
				"><span id="after4"></span>
				<input type="number" id="edate" min="1" max="31" oninput="
				if (this.value>=0&&this.value<=31) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>31&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='31';
						}
					}
				}
				url();
				"><span id="after5"></span>
				<input type="number" id="ehour" min="0" max="23" oninput="
				if (this.value>=0&&this.value<=23) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>23&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='23';
						}
					}
				}
				url();
				"><span id="after6"></span>
				<input type="number" id="eminute" min="0" max="59" oninput="
				if (this.value>=0&&this.value<=59) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>59&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='59';
						}
					}
				}
				url();
				"><span id="after7"></span>
				<input type="number" id="esecond" min="0" max="59" oninput="
				if (this.value>=0&&this.value<=59) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>59&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='59';
						}
					}
				}
				url();
				"><span id="after8"></span>
			</div>
			<div></div>
			<input type="checkbox" id="password"
				onclick="if(this.checked==true){document.getElementById('password-input').style.display='block'}else{document.getElementById('password-input').style.display='none'};url();"><span
				id="after10"></span>
			<div id="password-input" style="display: none;">
				<input type="password" id="password-1"
					oninput="if(document.getElementById('password-2').value!=this.value&&document.getElementById('password-2').value!=''){document.getElementById('after13').innerText='两次输入不一致'}else{document.getElementById('after13').innerText=''};url();"><span
					id="after11"></span>
				<input type="password" id="password-2"
					oninput="if(document.getElementById('password-1').value!=this.value){document.getElementById('after13').innerText='两次输入不一致';document.getElementById('after14').innerText='';}else{document.getElementById('after13').innerText='';document.getElementById('after14').innerText='√';};url();"><span
					id="after12"></span><span id="after14"></span><span id="after13"></span>
			</div>

		</div>
		<div class="result">
			<h3>结果：</h3>
			<textarea id="res1" rows="1" style="width: 50%;cursor: text;" disabled></textarea>
			<button onclick="copy1();">点击复制</button>
			<h3>二维码：</h3>
			<div id="qr1"></div>
		</div>
	</div>
	<hr style="margin-top: 3em;height: 3px;color: black;background-color: black;">
	<div class="main">
		<h2 style="margin-top: 3em;"><span id="h2-2"></span></h2>
		<textarea id="textarea2" class="textarea2" rows="5" oninput="text(this.value);"></textarea>
		<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
		<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
		<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
		<div class="urlq2">
			<input type="checkbox" id="blankpage2" checked  onclick="text();"><span id="after1"></span>
			<div></div>
			<input type="checkbox" id="starttime2"
				onclick="if(document.getElementById('starttime2').checked==true){document.getElementById('s-time2').style.display='block'}else{document.getElementById('s-time2').style.display='none'};text();"><span
				id="after2"></span>
			<div id="s-time2" style="display: none;">
				<span><input type="number" id="year2" min="1000" max="9999" oninput="
					if (this.value>=0&&this.value<=9999) {
						this.value=Math.floor(this.value);
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>9999) {
								this.value=\`\$\{this.value[0]+this.value[1]+this.value[2]+this.value[3]\}\`
							}else{
								this.value=''
							}
						}
					}
					text();
					"><span id="after3"></span></span>
				<span><input type="number" id="month2" min="1" max="12" oninput="
					if (this.value>=0&&this.value<=12) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>12&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='12';
							}
						}
					}
					text();
					"><span id="after4"></span></span>
				<span><input type="number" id="date2" min="1" max="31" oninput="
					if (this.value>=0&&this.value<=31) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>31&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='31';
							}
						}
					}
					text();
					"><span id="after5"></span></span>
				<span><input type="number" id="hour2" min="0" max="23" oninput="
					if (this.value>=0&&this.value<=23) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>23&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='23';
							}
						}
					}
					text();
					"><span id="after6"></span></span>
				<span><input type="number" id="minute2" min="0" max="59" oninput="
					if (this.value>=0&&this.value<=59) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>59&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='59';
							}
						}
					}
					text();
					"><span id="after7"></span></span>
				<span><input type="number" id="second2" min="0" max="59" oninput="
					if (this.value>=0&&this.value<=59) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>59&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='59';
							}
						}
					}
					text();
					"><span id="after8"></span></span>
			</div>
			<div></div>
			<input type="checkbox" id="endtime2"
				onclick="if(document.getElementById('endtime2').checked==true){document.getElementById('e-time2').style.display='block'}else{document.getElementById('e-time2').style.display='none'};text();"><span
				id="after9"></span>
			<div id="e-time2" style="display: none;">
				<input type="number" id="eyear2" min="1" max="9999" oninput="
				if (this.value>=0&&this.value<=9999) {
					this.value=Math.floor(this.value);
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>9999) {
							this.value=\`\$\{this.value[0]+this.value[1]+this.value[2]+this.value[3]\}\`
						}else{
							this.value=''
						}
					}
				}
				text();
				"><span id="after3"></span>
				<input type="number" id="emonth2" min="1" max="12" oninput="
				if (this.value>=0&&this.value<=12) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>12&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='12';
						}
					}
				}
				text();
				"><span id="after4"></span>
				<input type="number" id="edate2" min="1" max="31" oninput="
				if (this.value>=0&&this.value<=31) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>31&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='31';
						}
					}
				}
				text();
				"><span id="after5"></span>
				<input type="number" id="ehour2" min="0" max="23" oninput="
				if (this.value>=0&&this.value<=23) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>23&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='23';
						}
					}
				}
				text();
				"><span id="after6"></span>
				<input type="number" id="eminute2" min="0" max="59" oninput="
				if (this.value>=0&&this.value<=59) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>59&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='59';
						}
					}
				}
				text();
				"><span id="after7"></span>
				<input type="number" id="esecond2" min="0" max="59" oninput="
				if (this.value>=0&&this.value<=59) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>59&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='59';
						}
					}
				}
				text();
				"><span id="after8"></span>
			</div>
			<div></div>
			<input type="checkbox" id="password2"
				onclick="if(this.checked==true){document.getElementById('password-input2').style.display='block'}else{document.getElementById('password-input2').style.display='none'};text();"><span
				id="after10"></span>
			<div id="password-input2" style="display: none;">
				<input type="password" id="password-12"
					oninput="if(document.getElementById('password-22').value!=this.value&&document.getElementById('password-22').value!=''){document.getElementById('after132').innerText='两次输入不一致'}else{document.getElementById('after132').innerText='';text();}"><span
					id="after11"></span>
				<input type="password" id="password-22"
					oninput="if(document.getElementById('password-12').value!=this.value){document.getElementById('after132').innerText='两次输入不一致';document.getElementById('after142').innerText='';}else{document.getElementById('after132').innerText='';document.getElementById('after142').innerText='√';text();}"><span
					id="after12"></span><span id="after142"></span><span id="after132"></span>
			</div>

		</div>
		<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
		<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
		<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
		<div class="result2">
			<h3>结果：</h3>
			<textarea id="res2" rows="1" style="width: 50%;cursor: text;" disabled></textarea>
			<button onclick="copy2();">点击复制</button>
			<h3>二维码：</h3>
			<div id="qr2"></div>
		</div>
	</div>`;
}
function show2() {
	document.getElementById("body").innerHTML=`	
	<div class="main1">
		<p id="p"></p>
	</div>
	<div id="inputKey">
		<div style="margin: auto;width:max-content;margin-top:3em;">
			<input type="text" id="inputKey-input" oninput="value=value.replace(/[^\\w_]/g,'');if(this.value!=''){document.getElementById('keyButton').disabled=false;document.getElementById('keyButton').style.cursor='default'}else{document.getElementById('keyButton').disabled=true;document.getElementById('keyButton').style.cursor='not-allowed'};">
			<button id="keyButton" disabled='true' onclick="if(document.getElementById('inputKey-input').value!=''){decrypt(document.getElementById('inputKey-input').value);}">使用此密钥解析</button>
		</div>
	</div>
	<div class="main">
		<h2><span id="h2"></span></h2>
		<textarea id="textarea" class="textarea" rows="2" oninput="url(this.value);"></textarea>
		<div class="urlq1">
			<input type="checkbox" id="blankpage" checked onclick="url();"><span id="after1"></span>
			<div></div>
			<input type="checkbox" id="auto" checked onclick="url();"><span id="after15"></span>
			<div></div>
			<input type="checkbox" id="starttime"
				onclick="if(document.getElementById('starttime').checked==true){document.getElementById('s-time').style.display='block'}else{document.getElementById('s-time').style.display='none'};url();"><span
				id="after2"></span>
			<div id="s-time" style="display: none;">
				<span><input type="number" id="year" min="1000" max="9999" oninput="
					if (this.value>=0&&this.value<=9999) {
						this.value=Math.floor(this.value);
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>9999) {
								this.value=\`\$\{this.value[0]+this.value[1]+this.value[2]+this.value[3]\}\`
							}else{
								this.value=''
							}
						}
					}
					url();
					"><span id="after3"></span></span>
				<span><input type="number" id="month" min="1" max="12" oninput="
					if (this.value>=0&&this.value<=12) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>12&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='12';
							}
						}
					}
					url();
					"><span id="after4"></span></span>
				<span><input type="number" id="date" min="1" max="31" oninput="
					if (this.value>=0&&this.value<=31) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>31&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='31';
							}
						}
					}
					url();
					"><span id="after5"></span></span>
				<span><input type="number" id="hour" min="0" max="23" oninput="
					if (this.value>=0&&this.value<=23) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>23&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='23';
							}
						}
					}
					url();
					"><span id="after6"></span></span>
				<span><input type="number" id="minute" min="0" max="59" oninput="
					if (this.value>=0&&this.value<=59) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>59&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='59';
							}
						}
					}
					url();
					"><span id="after7"></span></span>
				<span><input type="number" id="second" min="0" max="59" oninput="
					if (this.value>=0&&this.value<=59) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>59&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='59';
							}
						}
					}
					url();
					"><span id="after8"></span></span>
			</div>
			<div></div>
			<input type="checkbox" id="endtime"
				onclick="if(document.getElementById('endtime').checked==true){document.getElementById('e-time').style.display='block'}else{document.getElementById('e-time').style.display='none'};url();"><span
				id="after9"></span>
			<div id="e-time" style="display: none;">
				<input type="number" id="eyear" min="1" max="9999" oninput="
				if (this.value>=0&&this.value<=9999) {
					this.value=Math.floor(this.value);
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>9999) {
							this.value=\`\$\{this.value[0]+this.value[1]+this.value[2]+this.value[3]\}\`
						}else{
							this.value=''
						}
					}
				}
				url();
				"><span id="after3"></span>
				<input type="number" id="emonth" min="1" max="12" oninput="
				if (this.value>=0&&this.value<=12) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>12&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='12';
						}
					}
				}
				url();
				"><span id="after4"></span>
				<input type="number" id="edate" min="1" max="31" oninput="
				if (this.value>=0&&this.value<=31) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>31&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='31';
						}
					}
				}
				url();
				"><span id="after5"></span>
				<input type="number" id="ehour" min="0" max="23" oninput="
				if (this.value>=0&&this.value<=23) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>23&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='23';
						}
					}
				}
				url();
				"><span id="after6"></span>
				<input type="number" id="eminute" min="0" max="59" oninput="
				if (this.value>=0&&this.value<=59) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>59&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='59';
						}
					}
				}
				url();
				"><span id="after7"></span>
				<input type="number" id="esecond" min="0" max="59" oninput="
				if (this.value>=0&&this.value<=59) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>59&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='59';
						}
					}
				}
				url();
				"><span id="after8"></span>
			</div>
			<div></div>
			<input type="checkbox" id="password"
				onclick="if(this.checked==true){document.getElementById('password-input').style.display='block'}else{document.getElementById('password-input').style.display='none'};url();"><span
				id="after10"></span>
			<div id="password-input" style="display: none;">
				<input type="text" id="password-1"
					oninput="value=value.replace(/[^\\w_]/g,'');if(document.getElementById('password-2').value!=this.value&&document.getElementById('password-2').value!=''){document.getElementById('after13').innerText='两次输入不一致'}else{document.getElementById('after13').innerText='';url();}"><span
					id="after11"></span>
				<input type="password" id="password-2"
					oninput="value=value.replace(/[^\\w_]/g,'');if(document.getElementById('password-1').value!=this.value){document.getElementById('after13').innerText='两次输入不一致';document.getElementById('after14').innerText='';}else{document.getElementById('after13').innerText='';document.getElementById('after14').innerText='√';url();}"><span
					id="after12"></span><span id="after14"></span><span id="after13"></span>
			</div>

		</div>
		<div class="result">
			<h3>结果：</h3>
			<textarea id="res1" rows="1" style="width: 50%;cursor: text;" disabled></textarea>
			<button onclick="copy1();">点击复制</button>
			<h3>二维码：</h3>
			<div id="qr1"></div>
		</div>
	</div>
	<hr style="margin-top: 3em;height: 3px;color: black;background-color: black;">
	<div class="main">
		<h2 style="margin-top: 3em;"><span id="h2-2"></span></h2>
		<textarea id="textarea2" class="textarea2" rows="5" oninput="text(this.value);"></textarea>
		<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
		<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
		<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
		<div class="urlq2">
			<input type="checkbox" id="blankpage2" checked  onclick="text();"><span id="after1"></span>
			<div></div>
			<input type="checkbox" id="starttime2"
				onclick="if(document.getElementById('starttime2').checked==true){document.getElementById('s-time2').style.display='block'}else{document.getElementById('s-time2').style.display='none'};text();"><span
				id="after2"></span>
			<div id="s-time2" style="display: none;">
				<span><input type="number" id="year2" min="1000" max="9999" oninput="
					if (this.value>=0&&this.value<=9999) {
						this.value=Math.floor(this.value);
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>9999) {
								this.value=\`\$\{this.value[0]+this.value[1]+this.value[2]+this.value[3]\}\`
							}else{
								this.value=''
							}
						}
					}
					text();
					"><span id="after3"></span></span>
				<span><input type="number" id="month2" min="1" max="12" oninput="
					if (this.value>=0&&this.value<=12) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>12&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='12';
							}
						}
					}
					text();
					"><span id="after4"></span></span>
				<span><input type="number" id="date2" min="1" max="31" oninput="
					if (this.value>=0&&this.value<=31) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>31&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='31';
							}
						}
					}
					text();
					"><span id="after5"></span></span>
				<span><input type="number" id="hour2" min="0" max="23" oninput="
					if (this.value>=0&&this.value<=23) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>23&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='23';
							}
						}
					}
					text();
					"><span id="after6"></span></span>
				<span><input type="number" id="minute2" min="0" max="59" oninput="
					if (this.value>=0&&this.value<=59) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>59&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='59';
							}
						}
					}
					text();
					"><span id="after7"></span></span>
				<span><input type="number" id="second2" min="0" max="59" oninput="
					if (this.value>=0&&this.value<=59) {
						this.value=Math.floor(this.value).toString();
					} else {
						if (this.value<0) {
							this.value=0;
						} else {
							if (this.value>59&&this.value.length>2) {
								this.value=\`\$\{this.value[0]+this.value[1]\}\`;
							}else{
								this.value='59';
							}
						}
					}
					text();
					"><span id="after8"></span></span>
			</div>
			<div></div>
			<input type="checkbox" id="endtime2"
				onclick="if(document.getElementById('endtime2').checked==true){document.getElementById('e-time2').style.display='block'}else{document.getElementById('e-time2').style.display='none'};text();"><span
				id="after9"></span>
			<div id="e-time2" style="display: none;">
				<input type="number" id="eyear2" min="1" max="9999" oninput="
				if (this.value>=0&&this.value<=9999) {
					this.value=Math.floor(this.value);
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>9999) {
							this.value=\`\$\{this.value[0]+this.value[1]+this.value[2]+this.value[3]\}\`
						}else{
							this.value=''
						}
					}
				}
				text();
				"><span id="after3"></span>
				<input type="number" id="emonth2" min="1" max="12" oninput="
				if (this.value>=0&&this.value<=12) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>12&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='12';
						}
					}
				}
				text();
				"><span id="after4"></span>
				<input type="number" id="edate2" min="1" max="31" oninput="
				if (this.value>=0&&this.value<=31) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>31&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='31';
						}
					}
				}
				text();
				"><span id="after5"></span>
				<input type="number" id="ehour2" min="0" max="23" oninput="
				if (this.value>=0&&this.value<=23) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>23&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='23';
						}
					}
				}
				text();
				"><span id="after6"></span>
				<input type="number" id="eminute2" min="0" max="59" oninput="
				if (this.value>=0&&this.value<=59) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>59&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='59';
						}
					}
				}
				text();
				"><span id="after7"></span>
				<input type="number" id="esecond2" min="0" max="59" oninput="
				if (this.value>=0&&this.value<=59) {
					this.value=Math.floor(this.value).toString();
				} else {
					if (this.value<0) {
						this.value=0;
					} else {
						if (this.value>59&&this.value.length>2) {
							this.value=\`\$\{this.value[0]+this.value[1]\}\`;
						}else{
							this.value='59';
						}
					}
				}
				text();
				"><span id="after8"></span>
			</div>
			<div></div>
			<input type="checkbox" id="password2"
				onclick="if(this.checked==true){document.getElementById('password-input2').style.display='block'}else{document.getElementById('password-input2').style.display='none'};text();"><span
				id="after10"></span>
			<div id="password-input2" style="display: none;">
				<input type="text" id="password-12"
					oninput="value=value.replace(/[^\\w_]/g,'');if(document.getElementById('password-22').value!=this.value&&document.getElementById('password-22').value!=''){document.getElementById('after132').innerText='两次输入不一致'}else{document.getElementById('after132').innerText='';text();}"><span
					id="after11"></span>
				<input type="password" id="password-22"
					oninput="value=value.replace(/[^\\w_]/g,'');if(document.getElementById('password-12').value!=this.value){document.getElementById('after132').innerText='两次输入不一致';document.getElementById('after142').innerText='';}else{document.getElementById('after132').innerText='';document.getElementById('after142').innerText='√';text();}"><span
					id="after12"></span><span id="after142"></span><span id="after132"></span>
			</div>

		</div>
		<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
		<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
		<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
		<div class="result2">
			<h3>结果：</h3>
			<textarea id="res2" rows="1" style="width: 50%;cursor: text;" disabled></textarea>
			<button onclick="copy2();">点击复制</button>
			<h3>二维码：</h3>
			<div id="qr2"></div>
		</div>
	</div>`;
}
function show3() {
	document.getElementById("body").innerHTML=`	
	<div class="main1">
		<p id="p"></p>
	</div>
	<div id="inputKey">
		<div style="margin: auto;width:max-content;margin-top:3em;">
			<input type="text" id="inputKey-input" oninput="value=value.replace(/[^\\w_]/g,'');if(this.value!=''){document.getElementById('keyButton').disabled=false;document.getElementById('keyButton').style.cursor='default'}else{document.getElementById('keyButton').disabled=true;document.getElementById('keyButton').style.cursor='not-allowed'}">
			<button id="keyButton" disabled='true' onclick="if(document.getElementById('inputKey-input').value!=''){decrypt(document.getElementById('inputKey-input').value);}">使用此密钥解析</button>
		</div>
	</div>
	`
}