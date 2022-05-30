import React, { FC, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Assessment } from '../types';
import { View } from './Themed';

type AssessmentsByProject = {
  title: string,
  body: Assessment[],
}

interface Props {
  assessmentsByProject: AssessmentsByProject;
}

const Dropdown: FC<Props> = ({ assessmentsByProject }) => {
  const [visible, setVisible] = useState(false);

  const { title, body } = assessmentsByProject;

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = (assessments: Assessment[]) => {   
    if (visible) {
      return (
        <>
          {assessments.map((assessment, i) => {
            const { copId, acId, project, subProject } = assessment;           

            return (
              <View style={styles.dropdown} key={i}>
                <Text>
                  <Text style={styles.copId}>
                    {copId}
                  </Text>

                  <Text style={styles.acId}>
                    AC-{acId}
                  </Text>
                </Text>

                <Text>
                  <Text>
                    {project.name}.
                  </Text>

                  <Text>
                    {subProject.name}
                  </Text>
                </Text>
              </View>
            );
          })}
        </>
      )
    }
  };

  return (
    <>  
      <TouchableOpacity
        style={styles.button}
        onPress={toggleDropdown}
      >
        <Text style={styles.buttonText}>{title}</Text>
        <Icon 
          tvParallaxProperties=''
          type='font-awesome' 
          name='chevron-down'
        />
      </TouchableOpacity>
      {renderDropdown(body)}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    paddingHorizontal: 10,
  },
  buttonText: {
    flex: 1,
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  copId: {
    marginRight: 10,
    marginBottom: 10,
    color: '#e1d225',
  },
  acId: {
    marginBottom: 10,
    color: '#e1d225',
    fontWeight: 'bold',
  }
});

export default Dropdown;