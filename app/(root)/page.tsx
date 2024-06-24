import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/userActions';
import React from 'react'

const Home = async () => {
  // const loggedIn = { name:"nigg",firstName: 'Vikram' , lastName: 'Singh', email: 'singhvikramrajan111@gmail.com'};
  const loggedIn = await getLoggedInUser();
  // console.log(loggedIn)

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account trsnactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50},{currentBalance: 500.50}]}
      />
    </section>
  )
}

export default Home;
