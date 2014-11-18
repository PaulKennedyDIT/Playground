if(Meteor.isClient){
	Template.hello.helpers({
		name : "Test"
	});

	Template.hello.events({
		'click input': function(){
			if(typeof console !== 'undefined'){
				console.log("You pressed the button");
			}
		}
	});
}