// pages/Home.tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon, IonText } from '@ionic/react';
import { add, megaphoneOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  // Sample data
  const [announcements] = useState([
    {
      id: 1,
      title: 'Welcome Back!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'May 10, 2024',
      author: 'Admin',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      description: 'Sed quis velit non mauris varius blandit nec vel dui.',
      date: 'May 5, 2024',
      author: 'Teacher',
      color: 'secondary'
    }
  ]);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* List of existing announcements */}
        <IonList>
          {announcements.map(announcement => (
            <IonItem key={announcement.id}>
              <IonIcon icon={megaphoneOutline} color={announcement.color} slot="start" />
              <IonLabel>
                <h2>{announcement.title}</h2>
                <p>{announcement.description}</p>
                <p>
                  <IonText color="medium">Date: {announcement.date}</IonText>
                  <br />
                  <IonText color="medium">Author: {announcement.author}</IonText>
                </p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
