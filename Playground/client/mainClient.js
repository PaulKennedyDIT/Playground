if(Meteor.isClient){
	Template.hello.helpers({
		name : "Test"
	});

	Template.nametag.helpers({
		name: "Paul Kennedy"
	});

	Template.list.helpers({
		people: [{name: "John"}, {name : "Paul"}, {name: "Mark"}]
	});

	Template.hello.events({
		'click input': function(){
			if(typeof console !== 'undefined'){
				console.log("You pressed the button");
			}
		}
	});
}