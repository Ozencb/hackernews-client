import styled from 'styled-components';

export const StoryWrapper = styled.section`
    padding-top: 10px;
    margin-bottom: 20px;
    border-top: 1px solid #CCCCCC;

    &:first-of-type {
        border-top: 0;
    }

    &:last-of-type {
        margin-bottom: 0;
        padding-bottom: 0;
    }
`;

export const StoryTitle = styled.h1`
    margin-bottom: 0.5rem;
    font-size: 1em;
    line-height: 1.5;
    margin: 0 auto 0.5rem auto;
    text-decoration: none;
    font-weight: bold;

    a {
        color: #2e2e2c;
        background-color: #f8dc3d;
        text-decoration: none;
        padding: 3px;
    }
`;

export const StoryMeta = styled.div`
    font-style: italic;

    > span:not(:first-child):before {
        content: '•';
        margin: 0 7px;
    }
`;

export const StoryMetaElement = styled.span`
   font-weight: bold;
   color: ${props => props.color || '#3F3F3F'};
   margin-left: ${props => props.margin || 0};

   > span {
       font-weight: normal;
   }
`;
