# CloudMate -- Cloud Computing Q&A Chatbot

CloudMate is a simple chat-based question-answering workflow built with
**n8n**. It uses a prepared CSV dataset containing 200 Cloud Computing
questions and answers. When a user sends a question, the workflow
searches the dataset and returns the matching answer.

## Project Overview

-   **Project name:** CloudMate
-   **Purpose:** Answer basic Cloud Computing questions using a
    user-provided question-and-answer dataset.
-   **Platform:** n8n
-   **Data source:** CSV file containing 200 Cloud Computing Q&A pairs
-   **Main language used in Code nodes:** JavaScript

## Workflow

The current n8n workflow contains these nodes, in order:

1.  **When chat message received** -- Starts the workflow when a user
    sends a message in the chat.
2.  **Code in JavaScript** -- Reads the incoming chat question and
    prepares it for searching.
3.  **Download file1** -- Downloads the Cloud Computing CSV dataset from
    Google Drive.
4.  **Extract from File (Extract From CSV)** -- Reads the CSV file and
    converts its rows into individual items.
5.  **Code in JavaScript1** -- Checks the user's question against the
    dataset and returns the matching question and answer.

## How It Works

1.  The user enters a Cloud Computing question in the chat.
2.  n8n receives the message and passes it through the first Code node.
3.  The workflow downloads the CSV dataset from Google Drive.
4.  The Extract From File node reads the CSV data. The current test
    execution shows **200 extracted items**.
5.  The final Code node searches the extracted Q&A records and prepares
    the response.
6.  The matching answer is returned in the chat.

### Example

**User question:**

> What is cloud computing?

**Example answer:**

> Cloud computing is the on-demand delivery of computing resources such
> as servers, storage, databases, networking, and software over the
> Internet, usually with pay-as-you-go pricing.

## Dataset Format

The CSV file should contain two columns:

  Column       Description
  ------------ ----------------------------
  `question`   A Cloud Computing question
  `answer`     The corresponding answer

The dataset used in the workflow contains 200 question-and-answer
records.

## Requirements

-   An n8n account or n8n instance
-   Access to the workflow
-   A Google Drive account with the CSV dataset uploaded
-   Google Drive credentials connected in n8n
-   A CSV file with `question` and `answer` columns

## Setup

1.  Prepare the Cloud Computing Q&A dataset as a CSV file.
2.  Upload the CSV file to Google Drive.
3.  Open the n8n workflow.
4.  Configure the **Download file** node with your Google Drive
    credentials and select the dataset file.
5.  In the **Extract From File** node, choose **Extract From CSV** and
    set the input binary field to `data` if that is the binary field
    produced by the download node.
6.  Check that both Code nodes are connected in the correct order.
7.  Test the workflow by sending a question through the chat trigger.
8.  Confirm that the final node returns the expected question and
    answer.

## Testing

Try questions that are present in the CSV dataset, for example:

-   What is cloud computing?
-   What are the service models of cloud computing?
-   What is virtualization?

The workflow should return the answer stored in the dataset for a
matching question.

## Current Scope and Limitations

-   The workflow is designed to answer from the supplied dataset.
-   It is not a general-purpose AI model and does not automatically know
    answers that are not in the CSV file.
-   A question that does not match a dataset entry may not return a
    useful answer unless an appropriate fallback is added.
-   The screenshot confirms that the CSV extraction produced 200 items
    and that a test question returned a question-and-answer result. It
    does not establish that fuzzy matching, semantic search, or
    AI-generated answers are implemented.

## Future Improvements

-   Add more Cloud Computing questions and answers.
-   Improve question matching so that small wording differences can be
    handled.
-   Add a clear response for questions that are not found in the
    dataset.
-   Improve the chat interface and response formatting.
-   Add categories such as Cloud Service Models, Virtualization,
    Storage, Security, and Deployment Models.

## Project Status

The n8n workflow has been connected and a test execution has
successfully extracted the CSV records and returned an answer for the
question **"What is cloud computing?"**.

