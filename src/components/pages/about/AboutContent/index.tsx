
"use client";
import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Card, CardContent, Button } from "@mui/material";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Milestone {
  year: string;
  event: string;
}

const teamMembers: TeamMember[] = [
  { name: "Itamar Marcus", role: "Founder & Director", image: "https://i.pravatar.cc/150?u=1" },
  { name: "Nan Jacques Zilberdik", role: "Senior Analyst", image: "https://i.pravatar.cc/150?u=2" },
  { name: "Maurice Hirsch", role: "Head of Legal Strategies", image: "https://i.pravatar.cc/150?u=3" },
];

const milestones: Milestone[] = [
  { year: "1996", event: "PMW founded by Itamar Marcus" },
  { year: "2000", event: "First major report on PA schoolbooks" },
  { year: "2007", event: "Launched comprehensive video archive" },
];

const AboutContent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("what-we-do");
  const [showMore, setShowMore] = useState(false); 

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", p: 3 }}>
      <Typography variant="h3" gutterBottom color="primary">
        About Us
      </Typography>

      <Typography paragraph>
        Palestinian Media Watch is a non-profit organization dedicated to fostering peace by exposing hate and promoting understanding in Palestinian society.
      </Typography>

      <Tabs
        value={selectedTab}
        onChange={(_, val) => setSelectedTab(val)}
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 3 }}
      >
        <Tab label="What We Do" value="what-we-do" />
        <Tab label="Our Impact" value="our-impact" />
        <Tab label="Our Team" value="our-team" />
      </Tabs>

      {selectedTab === "what-we-do" && (
        <Box>
          <Typography variant="h5" gutterBottom>
            What We Do
          </Typography>
          <Typography>
            Monitor and translate Palestinian media, analyze schoolbooks, produce reports, and educate the public.
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => setShowMore((prev) => !prev)} 
          >
            {showMore ? "Hide Details" : "Learn More"}
          </Button>

        
          {showMore && (
            <Box mt={4} className="grid gap-8 md:grid-cols-2">
              <Box>
                <Typography paragraph className="text-lg text-muted-foreground">
                  Palestinian Media Watch was founded in 1996 by Itamar Marcus, who recognized the
                  critical need for accurate, comprehensive monitoring of Palestinian media and
                  education.
                </Typography>
                <Typography paragraph className="text-lg text-muted-foreground">
                  Over the past 25+ years, PMW has become a leading authority on Palestinian society,
                  providing governments, legislators, media, and academic researchers with an accurate
                  picture of Palestinian society.
                </Typography>
              </Box>
              <Box>
                <Typography paragraph className="text-lg text-muted-foreground">
                  Our work has been instrumental in exposing the discrepancies between public and
                  private messages in Palestinian communications, contributing significantly to
                  policy discussions and peace negotiations.
                </Typography>
                <Typography className="text-lg text-muted-foreground">
                  Today, PMW continues its mission with a dedicated team of researchers and
                  translators, working tirelessly to promote understanding and peace in the region.
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      )}

      {selectedTab === "our-impact" && (
        <Box>
          <Typography variant="h5" gutterBottom>
            Our Impact
          </Typography>
          <ul>
            <li>Cited by government officials in policy discussions</li>
            <li>Informed international media coverage</li>
            <li>Contributed to changes in foreign aid policies</li>
            <li>Raised awareness about Palestinian education</li>
          </ul>
        </Box>
      )}

      {selectedTab === "our-team" && (
        <Box>
          <Typography variant="h5" gutterBottom>
            Our Team
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {teamMembers.map((member) => (
              <Card key={member.name} sx={{ width: 200 }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: "100%", height: 150, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="subtitle1">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      )}

      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" gutterBottom>
          Key Milestones
        </Typography>
        <ul>
          {milestones.map(({ year, event }) => (
            <li key={year}>
              <strong>{year}</strong>: {event}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default AboutContent;

