/*moth array*/
var month = new Array();

month[0] = getMonth("January",".\\img\\jan\\back.jpg");
month[1] = getMonth("February","");
month[2] = getMonth("March","");
month[3] = getMonth( "April","");
month[4] = getMonth( "May","");
month[5] = getMonth( "June","");
month[6] = getMonth( "July","");
month[7] = getMonth( "August","");
month[8] = getMonth( "September","");
month[9] = getMonth( "October","");
month[10]= getMonth(  "November","");
month[11] = getMonth( "December","");

function getMonth(name,img){
	var hd = new Object();
	hd.name = name;
	hd.image = img;
	return hd;
}



var daysArray = new Array();

 daysArray[0] =  newHoliDay("2015_0_4",1,1,1,1,"	<b>Duruthu Full Moon Poya Day </b></br>The important significance of Duruthu Full Moon Poya Day, marks Gautama Buddha’s first visit to Sri Lanka. Twenty-five centuries back, nine months after his Enlightenment, the blessed one visited Mahiyangana, in the Uva Province of Sri Lanka. His mission was to restore peace, to create a state of freedom from war or violence. The old chronicle Mahavamsa records and states 'To free the beautiful land from the evil doing Yakkas'. On his first visit to Sri Lanka, the awakened one, arrived at a spot, where now stand the Mahiyangana stupa.</br></br><b>Milad-Un-Nabi (Holy Prophet’s Birthday) </b>","dummy",0);
 daysArray[1] =   newHoliDay("2015_0_15",1,1,0,1,"	Tamil Thai Pongal Day","dummy",0);
 daysArray[2] =   newHoliDay("2015_1_3",1,1,1,1,"	Navam Full Moon Poya Day","dummy",0);
 daysArray[3] =  newHoliDay("2015_1_4",1,1,0,1,"<b>67th Independence day </b></br></br> Sri Lanka's Independence Day is celebrated on 4th of February, in accordance with Lipass/Joshua Louis Law to commemorate its internal political independence from British rule on that day in 1948.","dummy",0);
 daysArray[4] =  newHoliDay("2015_1_17",1,0,0,1,"   Maha Sivarathri Day","dummy",0);
 daysArray[5] =  newHoliDay("2015_2_5",1,1,1,1,"	Medin Full Moon Poya Day","dummy",0);
 daysArray[6] =  newHoliDay("2015_3_3",1,1,1,1,"    Bak Full Moon Poya Day </br>Good Friday","dummy",0);
 daysArray[7] =  newHoliDay("2015_3_13",1,1,0,1,"   Day prior to Sinhala and Tamil New Year Day","dummy",0);
 daysArray[8] =  newHoliDay("2015_3_14",1,1,0,1,"   Sinhala and Tamil New Year Day","dummy",0);
 daysArray[9] =  newHoliDay("2015_4_1",1,1,0,1,"    May Day","dummy",0);
 daysArray[10] =  newHoliDay("2015_4_3",1,1,1,1,"    Wesak Full Moon Poya Day </br> 'The Buddha's message of peace, compassion and love for all living beings tells us to open our hearts and embrace all members of our human family, especially those in need. These timeless teachings can help guide governments and the international community. They can inspire our efforts to address many of the broader challenges confronting our world. Secretary-General Ban Ki-moon","dummy",0);
 daysArray[11] =  newHoliDay("2015_4_4",1,1,1,1,"	Day following Wesak Full Moon Poya Day","dummy",0);
 daysArray[12] =  newHoliDay("2015_5_2",1,1,1,1,"	Poson Full Moon Poya Day","dummy",0);
 daysArray[13] =  newHoliDay("2015_6_1",1,1,1,1,"	Adhi Esala Full Moon Poya Day","dummy",0)
 daysArray[14] =  newHoliDay("2015_6_18",1,0,0,1,"   Id-Ul-Fitr (Ramazan Festival Day)","dummy",0)
 daysArray[15] =  newHoliDay("2015_6_31",1,1,1,1,"   Esala Full Moon Poya Day","dummy",0)
 daysArray[16] =  newHoliDay("2015_7_29",1,1,1,1,"   Nikini Full Moon Poya Day","dummy",0)
 daysArray[17] =  newHoliDay("2015_8_24",1,0,0,1,"   Id-Ul-Alha (Hadji Festival Day","dummy",0)
 daysArray[18] =  newHoliDay("2015_8_27",1,1,1,1,"   Binara Full Moon Poya Day","dummy",0)
 daysArray[19] =  newHoliDay("2015_9_27",1,1,1,1,"   Vap Full Moon Poya Day","dummy",0)
 daysArray[20] =  newHoliDay("2015_10_10",1,0,0,1,"  Deepavali Festival Day","dummy",0)
 daysArray[21] =  newHoliDay("2015_10_25",1,1,1,1,"	Il Full Moon Poya Day","dummy",0)
 daysArray[22] =  newHoliDay("2015_11_24",1,1,1,1,"	Unduvap Full Moon Poya Day","dummy",0)
 daysArray[23] =  newHoliDay("2015_11_25",1,1,0,1,"	Christmas Day","dummy",0)
 
  daysArray[24] =  newHoliDay("2015_0_27",0,0,0,0,"<B>International Holocaust Remembrance Day</B>, is an international memorial day on 27 January commemorating the victims of the Holocaust. It commemorates the genocide that resulted in the death of an estimated 6 million Jews, 1 million Gypsies, 250,000 mentally and physically disabled people, and 9000 homosexual men by the Nazi regime and its collaborators","dummy",1);
  
  daysArray[25] =  newHoliDay("2015_1_6",0,0,0,0,"International Day of Zero Tolerance for Female Genital Mutilation </br></br>Female genital mutilation (FGM) comprises all procedures that involve partial or total removal of the external female genitalia, or other injury to the female genital organs for non-medical reasons, and is recognized internationally as a violation of the human rights of girls and women.","dummy",1);

   daysArray[26] =  newHoliDay("2015_1_13",0,0,0,0,"<b>World Radio Day 2015</b></br> 13 February is World Radio Day — a day to celebrate radio as a medium; to improve international cooperation between broadcasters; and to encourage major networks and community radio alike to promote access to information, freedom of expression and gender equality over the airwaves","dummy",1); 

      daysArray[27] =  newHoliDay("2015_1_16",0,0,0,0,"<b>World Day of Social Justice</b></br>Social justice is an underlying principle for peaceful and prosperous coexistence within and among nations. We uphold the principles of social justice when we promote gender equality or the rights of indigenous peoples and migrants. We advance social justice when we remove barriers that people face because of gender, age, race, ethnicity, religion, culture or disability.","dummy",1);
      daysArray[28] =  newHoliDay("2015_1_21",0,0,0,0,"<b>International Mother Language Day</b></br>On 16 May 2007 the United Nations General Assembly in its resolution A/RES/61/266 called upon Member States 'to promote the preservation and protection of all languages used by peoples of the world'. By the same resolution, the General Assembly proclaimed 2008 as the International Year of Languages, to promote unity in diversity and international understanding, through multilingualism and multiculturalism.","dummy",1);
     daysArray[29] =  newHoliDay("2015_2_1",0,0,0,0,"<b>Zero Discrimination Day</b></br>28 February 2014 - This year, for the first time, 1 March will be a moment to celebrate diversity and recognize that every person counts. HIV responses should leave no one behind.UNAIDS launched its Zero Discrimination Campaign on World AIDS Day in December 2013, which picks up momentum with a Zero Discrimination Day on 1 March 2014.  UNAIDS chose the butterfly as its transformative symbol. Calling for a transformation to achieve zero discrimination is no small task as it is often deeply rooted, yet ending discrimination will be the game changing factor in the journey towards ending AIDS by 2030.","dummy",1);
	 
     daysArray[30] =  newHoliDay("2015_2_3",0,0,0,0,"<b>World Wildlife Day </b></br>World Wildlife Day is an opportunity to celebrate the many beautiful and varied forms of wild fauna and flora and to raise awareness of the multitude of benefits that conservation provides to people. At the same time, the Day reminds us of the urgent need to step up the fight against wildlife crime, which has wide-ranging economic, environmental and social impacts. Wildlife has an intrinsic value and contributes to the ecological, genetic, social, economic, scientific, educational, cultural, recreational and aesthetic aspects of sustainable development and human well-being. For these reasons, all member States, the United Nations system and other international organizations, as well as civil society, non-governmental organizations and individuals, are invited to observe and to get involved in this global celebration of wildlife..","dummy",1);
     daysArray[31] =  newHoliDay("2015_2_8",0,0,0,0,"<b>International Women’s Day</b></br>International Women’s Day is a time to reflect on progress made, to call for change and to celebrate acts of courage and determination by ordinary women who have played an extraordinary role in the history of their countries and communities. This year’s theme, “Equality for women is progress for all”  emphasizes how gender equality, empowerment of women, women’s full enjoyment of human rights and the eradication of poverty are essential to economic and social development. It also stresses the vital role of women as agents of development","dummy",1);	 
     daysArray[32] =  newHoliDay("2015_2_21",0,0,0,0,"<b>International Day for the Elimination of Racial Discrimination</b></br>'I call on all people, especially political, civic and religious leaders, to strongly condemn messages and ideas based on racism, racial superiority or hatred as well as those that incite racism, racial discrimination, xenophobia and related intolerance.' </br>Secretary-General Ban Ki-moon","dummy",1);	
     daysArray[33] =  newHoliDay("2015_2_22",0,0,0,0,"<b>World Water Day</b></br>'On World Water Day, let us pledge to develop the policies needed to ensure that sustainable water and energy are secured for the many and not just the few'. Secretary-General Ban Ki-moon","dummy",1);		 
      daysArray[34] =  newHoliDay("2015_3_7",0,0,0,0,"<b>World Health Day 2015: Food safety</b></br>Unsafe food is linked to the deaths of an estimated 2 million people annually – mostly children. Food containing harmful bacteria, viruses, parasites or chemical substances is responsible for more than 200 diseases, ranging from diarrhoea to cancers.</br>New threats to food safety are constantly emerging. Changes in food production, distribution and consumption; changes to the environment; new and emerging pathogens; antimicrobial resistance - all pose challenges to national food safety systems. Increases in travel and trade enhance the likelihood that contamination can spread internationally.","dummy",1);	
      daysArray[35] =  newHoliDay("2015_3_7",0,0,0,0,"<b>International Mother Earth Day</b></br>' I appeal to all people everywhere to raise their voices. Speak out on behalf of this planet, our only home. Let us care for Mother Earth so she can continue to care for us as she has done for millennia. 'UN Secretary-General Ban Ki-moon","dummy",1);	  
      daysArray[36] =  newHoliDay("2015_4_3",0,0,0,0,"<b>World Press Freedom Day</b></br>'Journalism provides a platform for informed discussion across a wide range of development issues – from environmental challenges and scientific progress to gender equality, youth engagement and peacebuilding. Only when journalists are at liberty to monitor, investigate and criticize policies and actions can good governance exist.' UN Secretary-General Ban Ki-moon","dummy",1);		
      daysArray[37] =  newHoliDay("2015_4_31",0,0,0,0,"<b> World No Tobacco Day </b></br>Every year, on 31 May, WHO and partners mark World No Tobacco Day, highlighting the health risks associated with tobacco use and advocating for effective policies to reduce tobacco consumption. Tobacco kills nearly six million people each year, of which more than 600 000 are non-smokers dying from breathing second-hand smoke. For World No Tobacco Day 2014, we are calling on countries to raise taxes on tobacco","dummy",1);		  
      daysArray[38] =  newHoliDay("2015_5_1",0,0,0,0,"<b>Global Day of Parents  </b></br>The Global Day of Parents is observed on the 1st of June every year. The Day was proclaimed by the UN General Assembly in 2012 with resolution A/RES/66/292 and honours parents throughout the world. The Global Day provides an opportunity to appreciate all parents in all parts of the world for their selfless commitment to children and their lifelong sacrifice towards nurturing this relationship","dummy",1);
      daysArray[39] =  newHoliDay("2015_6_28",0,0,0,0,"<b>World Hepatitis Day </b></br>“It’s closer than you think” is the theme of this year’s World Hepatitis Day, which takes place on 28 July 2012. </br>The campaign focuses on raising awareness of the different forms of hepatitis: what they are and how they are transmitted; who is at risk; and the various methods of prevention and treatment. </br>Despite its staggering toll on health, hepatitis remains a group of diseases that are largely unknown, undiagnosed and untreated.","dummy",1);	 
      daysArray[40] =  newHoliDay("2015_7_9",0,0,0,0,"<b>International Day of the World's Indigenous Peoples </b></br>The interests of the indigenous peoples must be part of the new development agenda in order for it to succeed. […] Together, let us recognize and celebrate the valuable and distinctive identities of indigenous peoples around the world. Let us work even harder to empower them and support their aspirations. </br> Secretary-General Ban Ki-moon","dummy",1);
      daysArray[41] =  newHoliDay("2015_8_15",0,0,0,0,"<b>International Day of Democracy  </b></br>Democracy is a universal value based on the freely expressed will of people to determine their own political, economic, social and cultural systems and their full participation in all aspects of their lives. </br> While democracies share common features, there is no single model of democracy. Activities carried out by the United Nations in support of efforts of Governments to promote and consolidate democracy are undertaken in accordance with the UN Charter, and only at the specific request of the Member States concerned.","dummy",1);	  
      daysArray[42] =  newHoliDay("2015_9_1",0,0,0,0,"<b>International Day of Older Persons </b></br>On 14 December 1990, the United Nations General Assembly (by resolution 45/106) designated 1 October the International Day of Older Persons. </br>This was preceded by initiatives such as the Vienna International Plan of Action on Ageing - which was adopted by the 1982 World Assembly on Ageing - and endorsed later that year by the UN General Assembly","dummy",1);	
      daysArray[43] =  newHoliDay("2015_9_5",0,0,0,0,"<b>World Teachers’ Day</b></br>Teachers are an investment for the future of countries. What today’s children will face in adult life cannot be predicted and so the teachers of today and tomorrow need the skills, knowledge and support that will enable them to meet the diverse learning needs of every girl and boy.","dummy",1);	
      daysArray[44] =  newHoliDay("2015_10_14",0,0,0,0,"<b>World Diabetes Day</b>","dummy",1);	
      daysArray[45] =  newHoliDay("2015_10_19",0,0,0,0,"<b>World Toilet Day</b></br>2.5 billion people do not have access to proper sanitation, including toilets or latrines, with dramatic consequences on human health, dignity and security, the environment, and social and economic development..","dummy",1);		  

      daysArray[46] =  newHoliDay("2015_11_1",0,0,0,0,"<b>World AIDS Day</b></br>Ending the AIDS epidemic by 2030 is possible, but only by closing the gap between people who have access to HIV prevention, treatment, care and support services and people who are being left behind.</br>Closing the gap means empowering and enabling all people, everywhere, to access the services they need.","dummy",1);		 
      daysArray[47] =  newHoliDay("2015_11_10",0,0,0,0,"<b>Human Rights Day</b></br>The UN General Assembly proclaimed 10 December as Human Rights Day in 1950, to bring to the attention ‘of the peoples of the world’ the Universal Declaration of Human Rights as the common standard of achievement for all peoples and all nations.","dummy",1);


function newNote(note,time,alertTime,newNote,uid){
	var n = new Object();
	n.note = note;
	n.time = time;
	n.alertTime = alertTime;
	n.key = newNote;
	n.uid = uid;
	return n;
}	  


function newHoliDay(key,isPu ,isMe ,isPoy ,isBan, info , imgUrl,st){

	var hd = new Object();
		hd.key = key;
		hd.isPublic = isPu;
		hd.isMerchantile = isMe;
		hd.isPoya = isPoy;
		hd.isBank = isBan;
		hd.info = info;
		hd.status = st; // 0 for holidays and 1 for other info
		hd.url = imgUrl;
		
return  hd;
}