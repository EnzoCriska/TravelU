import React, { Component } from 'react';

import {
    Button,
    View,
    Text,
    Alert,
    TouchableHighlight,
    DatePickerAndroid,
    Date,


} from 'react-native';
// import {Calendar} from 'react-date-range'
import Calendar from 'react-native-calendar-select'


export default class PickDate extends Component {
    constructor(props) {
        super(props);
        this.state = {

            startDate: new Date(),
            endDate: new Date()

        };
        this.confirmDate = this.confirmDate.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
    }
    // when confirm button is clicked, an object is conveyed to outer component
    // contains following property:
    // startDate [Date Object], endDate [Date Object]
    // startMoment [Moment Object], endMoment [Moment Object]
    confirmDate({ startDate, endDate, startMoment, endMoment }) {
        this.setState({
            startDate,
            endDate
        });
    }
    openCalendar() {
        this.calendar && this.calendar.open();
    }
    // in render function
    render() {
        // It's an optional property, I use this to show the structure of customI18n object.
        let customI18n = {
            'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
            'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            'text': {
                'start': 'Check in',
                'end': 'Check out',
                'date': 'Date',
                'save': 'Confirm',
                'clear': 'Reset'
            },
            'date': 'DD / MM'  // date format
        };
        // optional property, too.
        let color = {
            subColor: '#DF3F5E'
        };
        
        return (
            <View>
                <Button title="Open Calendar" onPress={this.openCalendar}></Button>
                <Calendar
                    i18n="en"
                    ref={(calendar) => { this.calendar = calendar; }}
                    customI18n={customI18n}
                    color={color}
                    format="YYYYMMDD"
                    minDate="20170510"
                    maxDate="20180312"
                    //   startDate={this.state.startDate}
                    //   endDate={this.state.endDate}
                    onConfirm={this.confirmDate}
                />
                
            </View>



        );
    }
}