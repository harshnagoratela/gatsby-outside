import * as React from "react"
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Iframe from 'react-iframe';
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Tabs>
      <TabList>
        <Tab>List</Tab>
        <Tab>Create</Tab>
      </TabList>
      <TabPanel>
        <h1>Listing</h1>
        <Iframe 
          src="https://airtable.com/embed/shryoxxKjvZAapoWK?backgroundColor=green&viewControls=on" 
          frameBorder="0"
          width="100%" 
          height="533" 
          style={{background: "transparent; border: 1px solid #ccc;"}}>
          </Iframe>
      </TabPanel>
      <TabPanel>
        <h1>Creating</h1>
        <Iframe 
          src="https://airtable.com/embed/shrftZxCQkd4rK5sz?backgroundColor=green" 
          frameBorder="0" 
          width="100%" 
          height="533"
          style={{background: "transparent; border: 1px solid #ccc;"}}>
        </Iframe>
      </TabPanel>
    </Tabs>
  </Layout>
)

export default IndexPage
