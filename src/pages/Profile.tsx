import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { personCircleOutline, mailOutline, calendarOutline } from 'ionicons/icons';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonIcon icon={personCircleOutline} slot="start" color="primary" />
            <IonLabel>
              <h2>Kaye J.</h2>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={mailOutline} slot="start" color="primary" />
            <IonLabel>
              <h2>kj@gmail.com</h2>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={calendarOutline} slot="start" color="primary" />
            <IonLabel>
              <h2>Birth Date</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
