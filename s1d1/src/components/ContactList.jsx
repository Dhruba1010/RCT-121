import React, {useState} from 'react';
import { ContactCard } from './ContactCard';


export const ContactList = () => {

    const initState = [
        {"id":1,"avatar":"https://robohash.org/sintdelectusdistinctio.png?size=100x100&set=set1","first_name":"Ewell","last_name":"Fochs","email":"efochs0@sina.com.cn","phone":"+351-302-309-7873"},
        {"id":2,"avatar":"https://robohash.org/quoscommodihic.png?size=100x100&set=set1","first_name":"Katrinka","last_name":"Vamplers","email":"kvamplers1@livejournal.com","phone":"+27-435-876-8424"},
        {"id":3,"avatar":"https://robohash.org/commodiexplicaboillo.png?size=100x100&set=set1","first_name":"Winslow","last_name":"Davers","email":"wdavers2@microsoft.com","phone":"+86-232-198-0945"},
        {"id":4,"avatar":"https://robohash.org/optiodictaipsa.png?size=100x100&set=set1","first_name":"Leda","last_name":"Crauford","email":"lcrauford3@blogs.com","phone":"+48-630-723-8624"},
        {"id":5,"avatar":"https://robohash.org/sequiipsamaperiam.png?size=100x100&set=set1","first_name":"Johna","last_name":"Miner","email":"jminer4@loc.gov","phone":"+381-127-174-6838"},
        {"id":6,"avatar":"https://robohash.org/doloremqueomniscum.png?size=100x100&set=set1","first_name":"Ernaline","last_name":"Godson","email":"egodson5@tripadvisor.com","phone":"+27-884-967-1399"},
        {"id":7,"avatar":"https://robohash.org/doloremquequiquae.png?size=100x100&set=set1","first_name":"Jarad","last_name":"Tennant","email":"jtennant6@jalbum.net","phone":"+30-900-422-0785"},
        {"id":8,"avatar":"https://robohash.org/voluptatemrecusandaevoluptatibus.png?size=100x100&set=set1","first_name":"Adrea","last_name":"Morphew","email":"amorphew7@dot.gov","phone":"+970-249-319-7953"},
        {"id":9,"avatar":"https://robohash.org/impeditsedvelit.png?size=100x100&set=set1","first_name":"Gratia","last_name":"Strattan","email":"gstrattan8@pagesperso-orange.fr","phone":"+48-724-433-9335"},
        {"id":10,"avatar":"https://robohash.org/essesintut.png?size=100x100&set=set1","first_name":"Virgie","last_name":"Marriott","email":"vmarriott9@mac.com","phone":"+7-405-806-2816"}
    ];

    const [contact, setContact] = useState(initState);
    
    return (
        <div>
            <h1>Contact List</h1>
            {contact.map(c => (
                <div key={c.id}>
                    <ContactCard 
                        id={c.id}
                        avatar={c.avatar}
                        first_name={c.first_name}
                        last_name={c.last_name}
                        email={c.email}
                        phone={c.phone}
                    />
                </div>
            ))}
        </div>
    )
}

