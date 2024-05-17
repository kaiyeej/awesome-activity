// pages/Classes.tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import {personCircleOutline } from 'ionicons/icons';

const Classes: React.FC = () => {
  // Sample class data
  const [classes] = useState([
    { id: 1, name: 'Mathematics', teacher: 'Mr. Dela Cruz', time: '9:00 AM - 10:30 AM', room: 'Room 101' },
    { id: 2, name: 'Science', teacher: 'Ms. Smith', time: '11:00 AM - 12:30 PM', room: 'Room 102' },
    { id: 3, name: 'History', teacher: 'Mr. Lim', time: '1:00 PM - 2:30 PM', room: 'Room 103' }
  ]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Classes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Classes</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {classes.map(cls => (
            <IonItem key={cls.id}>
              <IonIcon icon={personCircleOutline} color='primary' slot="start" />
              <IonLabel>
                <h2>{cls.name}</h2>
                <p>Teacher: {cls.teacher}</p>
                <p>Time: {cls.time}</p>
                <p>Room: {cls.room}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Classes;
