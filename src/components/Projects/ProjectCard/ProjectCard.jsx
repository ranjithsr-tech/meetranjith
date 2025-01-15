import React from "react";
import parse from "html-react-parser";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PanToolIcon from '@mui/icons-material/PanTool';

function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.name} />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              {list.description.startsWith("<ul>") ? (
                // create list item if description has <ul> tag
                <>
                  <List>
                    {list.description
                      .replace(/<\/?ul>/g, '') // Remove <ul> and </ul> tags
                      .split(/<\/?li>/) // Split by <li> and </li> tags
                      .filter((item) => item.trim() !== '') // Filter out empty entries
                      .map((item, index) => (
                        <ListItem
                          key={index}
                          sx={{
                            '&:hover': {
                              backgroundColor: '#f5f5f5', // Add hover effect
                            },
                            py: 0.5, // Reduce vertical padding
                            px: 1,   // Reduce horizontal padding
                          }}
                        >
                          <ListItemIcon>
                            <PanToolIcon
                              sx={{
                                transform: 'rotate(-45deg)', // Rotate for finger-pointing effect
                                color: 'blue',
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                  </List>
                </>
              ) : (<>
                <p>{parse(list.description)}</p>
              </>)
              }
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.github_url.length > 0 && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
                {list.demo_url.length > 0 && (
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}

      <List>
        {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((item, index) => (
          <ListItem
            key={index}
            sx={{
              '&:hover': {
                backgroundColor: '#f5f5f5', // Add hover effect
              },
            }}
          >
            <ListItemIcon>
              <PanToolIcon
                sx={{
                  transform: 'rotate(-45deg)', // Rotate for finger-pointing effect
                  color: 'blue',
                }}
              />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ProjectCard;