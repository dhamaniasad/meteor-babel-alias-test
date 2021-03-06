import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import React from "react";
import { render } from 'react-dom';
import { form } from 'react-inform';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  window.React = React;
  window.render = render;
  window.reactForm = form;
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
