<<<<<<< HEAD

<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TREE -->

> [interactive graph](./dependency-graph.html)

![dependency graph](./dependency-graph.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- components
  - layout
    - [footer.js](#clientsrccomponentslayoutfooterjs)
    - [navbar.js](#clientsrccomponentslayoutnavbarjs)
    - [page.js](#clientsrccomponentslayoutpagejs)
  - pages
    - home
      - [index.js](#clientsrccomponentspageshomeindexjs)
      - [instructions.js](#clientsrccomponentspageshomeinstructionsjs)
      - [n_questions.js](#clientsrccomponentspageshomen_questionsjs)
    - questions
      - [index.js](#clientsrccomponentspagesquestionsindexjs)
    - quiz
      - [index.js](#clientsrccomponentspagesquizindexjs)
      - [next-btn.js](#clientsrccomponentspagesquiznext-btnjs)
      - [render-quiz.js](#clientsrccomponentspagesquizrender-quizjs)
  - shared
    - [input-greeting.js](#clientsrccomponentssharedinput-greetingjs)
    - [restart-btn.js](#clientsrccomponentssharedrestart-btnjs)
- handlers
  - [change-greeting.js](#clientsrchandlerschange-greetingjs)
  - [next-question-btn.js](#clientsrchandlersnext-question-btnjs)
  - [restart-quiz.js](#clientsrchandlersrestart-quizjs)
- init
  - [index.js](#clientsrcinitindexjs)
  - [router.js](#clientsrcinitrouterjs)
  - [state.js](#clientsrcinitstatejs)
- logic
  - [reverse.js](#clientsrclogicreversejs)
- [routes.js](#clientsrcroutesjs)

---

<!-- END TOC -->

<!-- BEGIN DOCS -->

# /components

## /layout

<details><summary><a href="../../client/src/components/layout/footer.js" id="clientsrccomponentslayoutfooterjs">../client/src/components/layout/footer.js</a></summary>

<a name="footer"></a>

## footer ⇒ <code>HTMLDivElement</code>

The shared footer.

**Returns**: <code>HTMLDivElement</code> - A rendered footer element.

</details>

<details><summary><a href="../../client/src/components/layout/navbar.js" id="clientsrccomponentslayoutnavbarjs">../client/src/components/layout/navbar.js</a></summary>

<a name="navbar"></a>

## navbar ⇒ <code>HTMLDivElement</code>

The shared navbar.

**Returns**: <code>HTMLDivElement</code> - A rendered nav bar element.

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| routes | <code>object</code> | A routes object, see /src/routes.js. |

</details>

<details><summary><a href="../../client/src/components/layout/page.js" id="clientsrccomponentslayoutpagejs">../client/src/components/layout/page.js</a></summary>

<a name="page"></a>

## page ⇒ <code>HTMLDivElement</code>

The page layout component.

**Returns**: <code>HTMLDivElement</code> - A rendered page element.  
**Throws**:

- <code>TypeError</code> When the bodyComponent is not a function or DOM element.

| Param         | Type                                              | Description                               |
| ------------- | ------------------------------------------------- | ----------------------------------------- |
| bodyComponent | <code>function</code> \| <code>HTMLElement</code> | The body for the newly rendered page.     |
| routes        | <code>object</code>                               | The application's routes, for the navbar. |

</details>

---

## /pages

### /home

<details><summary><a href="../../client/src/components/pages/home/index.js" id="clientsrccomponentspageshomeindexjs">../client/src/components/pages/home/index.js</a></summary>

<a name="home"></a>

## home ⇒ <code>HTMLDivElement</code>

The home page.

**Returns**: <code>HTMLDivElement</code> - A rendered home page.

</details>

<details><summary><a href="../../client/src/components/pages/home/instructions.js" id="clientsrccomponentspageshomeinstructionsjs">../client/src/components/pages/home/instructions.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/home/n_questions.js" id="clientsrccomponentspageshomen_questionsjs">../client/src/components/pages/home/n_questions.js</a></summary>

</details>

---

### /questions

<details><summary><a href="../../client/src/components/pages/questions/index.js" id="clientsrccomponentspagesquestionsindexjs">../client/src/components/pages/questions/index.js</a></summary>

<a name="questions"></a>

## questions ⇒ <code>HTMLDivElement</code>

The questions page.

**Returns**: <code>HTMLDivElement</code> - A rendered questions page.

</details>

---

### /quiz

<details><summary><a href="../../client/src/components/pages/quiz/index.js" id="clientsrccomponentspagesquizindexjs">../client/src/components/pages/quiz/index.js</a></summary>

<a name="quiz"></a>

## quiz ⇒ <code>HTMLDivElement</code>

The quiz page.

**Returns**: <code>HTMLDivElement</code> - A rendered quiz page.

</details>

<details><summary><a href="../../client/src/components/pages/quiz/next-btn.js" id="clientsrccomponentspagesquiznext-btnjs">../client/src/components/pages/quiz/next-btn.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/quiz/render-quiz.js" id="clientsrccomponentspagesquizrender-quizjs">../client/src/components/pages/quiz/render-quiz.js</a></summary>

</details>

---

---

## /shared

<details><summary><a href="../../client/src/components/shared/input-greeting.js" id="clientsrccomponentssharedinput-greetingjs">../client/src/components/shared/input-greeting.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/shared/restart-btn.js" id="clientsrccomponentssharedrestart-btnjs">../client/src/components/shared/restart-btn.js</a></summary>

</details>

---

---

# /handlers

<details><summary><a href="../../client/src/handlers/change-greeting.js" id="clientsrchandlerschange-greetingjs">../client/src/handlers/change-greeting.js</a></summary>

</details>

<details><summary><a href="../../client/src/handlers/next-question-btn.js" id="clientsrchandlersnext-question-btnjs">../client/src/handlers/next-question-btn.js</a></summary>

</details>

<details><summary><a href="../../client/src/handlers/restart-quiz.js" id="clientsrchandlersrestart-quizjs">../client/src/handlers/restart-quiz.js</a></summary>

</details>

---

# /init

<details><summary><a href="../../client/src/init/index.js" id="clientsrcinitindexjs">../client/src/init/index.js</a></summary>

</details>

<details><summary><a href="../../client/src/init/router.js" id="clientsrcinitrouterjs">../client/src/init/router.js</a></summary>

</details>

<details><summary><a href="../../client/src/init/state.js" id="clientsrcinitstatejs">../client/src/init/state.js</a></summary>

</details>

---

# /logic

<details><summary><a href="../../client/src/logic/reverse.js" id="clientsrclogicreversejs">../client/src/logic/reverse.js</a></summary>

<a name="reverse"></a>

## reverse ⇒ <code>string</code>

Reverses a string.

**Returns**: <code>string</code> - The reversed string.

| Param | Type                | Default                               | Description          |
| ----- | ------------------- | ------------------------------------- | -------------------- |
| [str] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string to reverse. |

</details>

---

<details><summary><a href="../../client/src/routes.js" id="clientsrcroutesjs">../client/src/routes.js</a></summary>

<a name="module_routes"></a>

## routes

Defines the route URLs, names and callbacks.

</details>

<!-- END DOCS -->

> > > > > > > 0f153957da43152a00b334cc3b774101ddba43ef
