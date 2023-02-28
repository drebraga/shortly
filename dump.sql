--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token character varying(120) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "shortUrl" character varying(120) NOT NULL,
    url text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(120) NOT NULL,
    email character varying(120) NOT NULL,
    password character varying(60) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (12, 17, 'cc37a588-d7d3-48d6-9dc8-8657b22220db', '2023-02-28 11:42:56.228204');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 1, 'abc', 'www.google.com', 0, '2023-02-27 14:19:42.258833');
INSERT INTO public.urls VALUES (2, 17, '3yplx4lc', 'https://www.google.com', 0, '2023-02-28 13:03:59.075372');
INSERT INTO public.urls VALUES (3, 17, 'kxffmo66', 'https://www.google.com', 0, '2023-02-28 13:04:49.212203');
INSERT INTO public.urls VALUES (4, 17, 'l2sf7r0p', 'https://www.google.com', 0, '2023-02-28 13:11:04.979397');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'andre', 'andre@andre.com', '1234', '2023-02-27 13:47:12.696426');
INSERT INTO public.users VALUES (2, 'marcos', 'marcos@email.com', '$2b$10$NBq5mrD.YEo330JkhMOWuOF9vqQ9CaWGLCbl3UswDd6OioJC02Pca', '2023-02-27 16:05:02.118621');
INSERT INTO public.users VALUES (4, 'dede', 'dede@email.com', '$2b$10$dGXW7Yc2lETYOId.OHyXTuGm.OIhAroiAqnUX138kIHrzeXfNCDg2', '2023-02-27 16:05:55.191326');
INSERT INTO public.users VALUES (5, 'jon', 'jon@email.com', '$2b$10$oD./77PYxZDSUkkeWm2TlOjfoEOfWNK8yXq5dYy4eG4BrzONhmFnu', '2023-02-27 16:08:41.220477');
INSERT INTO public.users VALUES (7, 'bb', 'bb@email.com', '$2b$10$dJunsL/3dndBrBhNXBpJGefpJpUtwP9B2wOhyq.umE4Bnl5UzdirS', '2023-02-27 16:15:53.504883');
INSERT INTO public.users VALUES (8, 'nm', 'nm@email.com', '$2b$10$60JilKPZBSc8hQkF5vGNOu/h7.fk3qkQJxhLXyKRmCXr.F8aQHmQK', '2023-02-27 16:16:19.051751');
INSERT INTO public.users VALUES (10, 'ty', 'ty@email.com', '$2b$10$7algR16hF3KJ2W5xup6ufOAbOPvaikGnhhyGW4/JcNTzUoFtHe4my', '2023-02-27 16:17:48.430641');
INSERT INTO public.users VALUES (12, 'er', 'er@email.com', '$2b$10$3jQ5wh8I6BaKebR8N5n3nuyvBCcCBqmMlNZ9P0kH953tA01MGYgDC', '2023-02-27 16:19:14.899151');
INSERT INTO public.users VALUES (13, 'qwe', 'qwe@email.com.br', '$2b$10$iXPqLE/VbxphR4q9F/034ORG3BeO7KOTW6MhPpqqcZj0ITRs3wtJu', '2023-02-27 16:41:12.952502');
INSERT INTO public.users VALUES (16, 'asd', 'asd@email.com.br', '$2b$10$yHzoz/5LsNpQjTAJNdh.8eHuVLUVCLa.9qUJW4O3V/UN4gLGewuPy', '2023-02-27 16:42:20.488606');
INSERT INTO public.users VALUES (17, 'ands', 'asda@email.com.br', '$2b$10$Y2Z5lZlcllHSKdFEiq6X5.dn8zQiE5iFpg.OyTm4GA5N.MKXoUM06', '2023-02-27 17:17:57.546484');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 12, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 17, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

