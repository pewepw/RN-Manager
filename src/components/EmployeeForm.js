import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                 <CardSection>
                    <Input 
                    label="Name"
                    placeholder="Jane"
                    value={this.props.name}
                    onChangeText={text => this.props.employeeUpdate({prop: "name", value: text})}/>
                </CardSection>

                <CardSection>
                <Input 
                    label="Phone"
                    placeholder="012-8885555"
                    value={this.props.phone}
                    onChangeText={text => this.props.employeeUpdate({prop: "phone", value: text})}/>
                </CardSection>

                <CardSection style={{ flexDirection: "column" }}>
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                    style={{ height: 150, alignSelf: "stretch", margin: 5 }}
                    selectedValue={this.props.shift}
                    onValueChange={value => this.props.employeeUpdate({prop: "shift", value: value})}>
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
            </View>
        )
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 20
    }
}

const mapStatToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStatToProps, { employeeUpdate} )(EmployeeForm);