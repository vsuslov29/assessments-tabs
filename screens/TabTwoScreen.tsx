import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Dropdown from '../components/Dropdown';

import { View } from '../components/Themed';
import { 
  Assessment, 
  AssessmentsByProjects, 
  PreparedAssessment, 
  ProjectAssessments, 
  RootState 
} from '../types';

const getAssessmentsByProject = (assessments: Assessment[]) => {
  let assessmentsByProject: AssessmentsByProjects = {};

  assessments.forEach(assessment => {
    const { name } = assessment.project;

    if (!assessmentsByProject[name]) {
      assessmentsByProject[name] = [];
    }

    assessmentsByProject[name].push(assessment);
  });

  return assessmentsByProject;
}

const getPreparedAssessments = (assessments: AssessmentsByProjects) => {
  let preparedAssessments: PreparedAssessment[] = [];

  Object.entries(assessments).map((projectAssessments: ProjectAssessments) => {    
    const [ title, body ] = projectAssessments;

    preparedAssessments.push({
      title,
      body,
    })
  });

  return preparedAssessments;
}

export default function TabTwoScreen() {
  const { creatorAssessments } = useSelector((state: RootState) => state.assessments);

  const assessmentsByProject = getAssessmentsByProject(creatorAssessments);

  const preparedAssessments = getPreparedAssessments(assessmentsByProject);
  
  return (
    <View style={styles.container}>
      {preparedAssessments.map((assessmentsByProject, i) => (
        <Dropdown 
          assessmentsByProject={assessmentsByProject} 
          key={i}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dropdown: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 20,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
