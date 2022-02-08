
//Generate Speaker Tiles
$.each(speakerData, function( i, speaker ) {
    $(".speaker__grid-summit").append(
        '<div class="speaker_tile">'+
        '<div class="modalName '+speaker.id+' '+speaker.position+'">'+
        '<div class="speaker_tile__image_ctn">'+
        '<div class="speaker_tile__image" style="background-image:url('+speaker.photo+')">'+
        '</div>'+
        '</div>'+
        '<div class="speaker_tile__content">'+
        '<p class="speaker_name">'+speaker.name+'</p>'+
        '<p class="speaker_title">'+speaker.title+'</p>'+
        '<p class="speaker_company">'+speaker.company+'</p>'+
        '</div>'+
        '</div>'+
        '</div>'
    );
});
//Generate Speaker Profiles
$.each(speakerData, function( i, speaker ) {
    
    $(".speakerProfiles").append(
        '<div class="'+speaker.id+' popModal">'+
        '<div class="modalContainer">'+
        '<div class="modalContent speakerModal">'+
        '<span class="close">&times;</span>'+
        '<div class="speaker__profile_grid">'+
        '<div class="speaker_tile__image_ctn">'+
        '<div class="speaker_tile__image" style="background-image:url('+speaker.photo+')">'+
        '<div class="social_links">'+
        (speaker.linkedIn.length > 1 ? 
            '<a class="linkedin" href='+speaker.linkedIn+' target="_blank"></a>'
            : ''
        )+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="speaker__profile">'+
        '<div class="speaker__profile_details">'+
        '<h4 class="profile_name">'+speaker.name+'</h4>'+
        '<p class="profile_title">'+speaker.title+'</p>'+
        '<h4 class="profile_company">'+speaker.company+'</h4>'+
        '<p class="profile_bio profile_scroll">'+speaker.bio+'</p>'+
        (speaker.speaking.length > 0 ? 
            '<p class="speakingSession_Title dash_s ">Speaking on</p>'
            : ''
        )+
        '<div class="speakingSession profile_scroll '+speaker.speaking.join(' ')+'">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'
    );
});
//Generate Profile Speaker Sessions
$.each(sessionData, function( i, session ) {
    $(".speakingSession."+session.id).append(
        '<div class="scrollTo '+session.agendaIndex+ ' '+ session.id+'">'+
        '<p class="time">'+
        '<span>Day '+session.day+' — </span>'+
        '<span class="GMT">'+session.gmt+'</span>'+
        '<span class="EST">'+session.est+'</span>'+
        '</p>'+
        '<p class="sessionName">'+session.title+'</p>'+
        '</div>'
    );
});
//Generate Sponsor Logos
$.each(sponsorData, function( i, sponsor ) {
    $(".summit_sponsor__grid").append(
        '<div class="modalName '+sponsor.id+' sponsor_box">'+
        '<div class=" sponsor_logo">'+
        '<img src="'+sponsor.logo+'">'+
        '</div>'+
        '</div>'
    );
});
//Generate Sponsor Profiles
$.each(sponsorData, function( i, sponsor ) {
    $(".sponsorProfile").append(
        '<div class="'+sponsor.id+' popModal">'+
        '<div class="modalContainer">'+
        '<div class="modalContent sponsorModal">'+
        '<span class="close">&times;</span>'+
        '<div id="'+sponsor.id+'" class="summit_sponsor_ctn">'+
        '<div class="sponsor_details_ctn">'+
        '<div class="sponsor_main_logo">'+
        '<img src="'+sponsor.logo+'">'+
        '</div>'+
        '<div class="sponsor_bio">'+
        '<h4 class="profile_name">'+sponsor.name+'</h4>'+
        '<div class="social_links">'+
        (sponsor.linkedIn.length > 1 ?
            '<a class="linkedin" href="'+sponsor.linkedIn+'" target="_blank"></a>'
            : ''
        )+
        (sponsor.twitter.length > 1 ?
            '<a class="twitter" href="'+sponsor.twitter+'" target="_blank"></a>'
            : ''
        )+
        '<a class="web_link" href="'+sponsor.website[1]+'" target="_blank">'+sponsor.website[0]+'</a>'+
        '</div>'+
        '<p class="profile_bio profile_scroll">'+sponsor.bio+'</p>'+
        (sponsor.resourceA[0].length > 1 ?
            '<p class="sponsorResources_Title dash_s ">Resources</p>'
            : ''
        )+
        '<div class="sponsorResources profile_scroll">'+
        (sponsor.resourceA[0].length > 1 ?
            '<div>'+
            '<a href="'+sponsor.resourceA[2]+'" target="_blank">'+
            '<p class="resourceName">'+sponsor.resourceA[0]+'</p>'+
            '<p class="resourceLink"><span>'+sponsor.resourceA[1]+'</p>'+
            '</a>'+
            '</div>'
            : ''
        )+
        (sponsor.resourceB[0].length > 1 ?
            '<div>'+
            '<a href="'+sponsor.resourceB[2]+'" target="_blank">'+
            '<p class="resourceName">'+sponsor.resourceB[0]+'</p>'+
            '<p class="resourceLink"><span>'+sponsor.resourceB[1]+'</p>'+
            '</a>'+
            '</div>'
            : ''
        )+
        (sponsor.resourceC[0].length > 1 ?
            '<div>'+
            '<a href="'+sponsor.resourceC[2]+'" target="_blank">'+
            '<p class="resourceName">'+sponsor.resourceC[0]+'</p>'+
            '<p class="resourceLink"><span>'+sponsor.resourceC[1]+'</p>'+
            '</a>'+
            '</div>'
            : ''
        )+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'
    );
});
//Generate Agenda sessions
$.each(sessionData, function( i, session ) {
    var day = ".day";
    $(".agenda_table .day"+session.day).append(
        '<div class="summit_agenda_session '+session.id+' '+session.css+'">'+
        '<div class="session_container">'+
        '<div class="session-time">'+
        '<p class="time"><span class="GMT">'+session.gmt+'</span><span class="EST">'+session.est+'</span></p>'+
        '</div>'+
        '<div>'+
        '<div class="session-type">'+
        '<span class="type marker">'+session.type+'</span>'+
        '<span class="duration">'+session.duration+'</span>'+
        (session.calendar.length > 1 ?
            '<div>'+
                '<input name="star'+session.id+'" id="star'+session.id+'" type="checkbox" class="starBox" />'+
                '<label for="star'+session.id+'" class="star"></label>'+
                '<a class="calendar" href="'+session.calendar+'" title="Add to calendar"></a>'+
            '</div>'
            : ''
        )+
        '</div>'+
        '<h3>'+session.title+'</h3>'+
        '<div class="session-summary">'+
        '<p>'+session.summary+'</p>'+
        '</div>'+
        (session.type === "Panel" ?
            '<div class="session-type typePanelists">'+
            '<span class="type">Panelists</span>'+
            '</div>'+
            '<ul class="virtualSummit_speaker">'+
            '</ul>'
            : ''
        )+
        (session.type === "Keynote" || session.type === "Awards" ?
            '<div class="session-type typePanelists">'+
            '</div>'+
            '<ul class="virtualSummit_speaker">'+
            '</ul>'
            : ''
        )+
        '</div>'+
        '</div>'+
        '</div>'
    );
});
//Generate Agenda Speakers
$.each(speakerData, function( i, speaker ) {
    for (var i = 0; i < speaker.speaking.length; i++) {
        $("."+speaker.speaking[i]+ " .virtualSummit_speaker").append(
            (speaker.position === "chair" ?
                '<li><span class="modalName '+speaker.id+'"><span class="agendaProfile" style="background-image:url('+speaker.photo+')"></span>'+speaker.name+'</span>, '+speaker.title+' at '+speaker.company+'</li>'
                : ''
            )+
            (speaker.position === "analyst" ?
                '<li><span class="modalName '+speaker.id+'"><span class="agendaProfile" style="background-image:url('+speaker.photo+')"></span>'+speaker.name+'</span>, '+speaker.title+' at '+speaker.company+'</li>'
                : ''
            )+
            (speaker.position === "panelist" ?
                '<li><span class="modalName '+speaker.id+'"><span class="agendaProfile" style="background-image:url('+speaker.photo+')"></span>'+speaker.name+'</span>, '+speaker.title+' at '+speaker.company+'</li>'
                : ''
            )
        );
    }
});