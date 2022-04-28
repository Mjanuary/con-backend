--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 14.0

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
-- Name: documents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.documents (
    document_id character varying(300) NOT NULL,
    document_code character varying(10),
    document_url character varying(300),
    document_reference_code character varying(300),
    registered_by_id character varying(200),
    registered_date timestamp with time zone,
    domain_id character varying(100),
    priority_id integer,
    institute_id character varying(100),
    minister_view integer DEFAULT 0,
    minister_view_date timestamp with time zone,
    minister_id character varying(100),
    minister_comment text,
    cecat_view integer DEFAULT 1,
    cecat_view_date timestamp with time zone,
    cecat_id character varying,
    director_view numeric DEFAULT 0,
    director_view_date timestamp with time zone,
    director_id character varying,
    director_comment text,
    governor_view integer DEFAULT 0,
    governor_signed integer DEFAULT 0,
    governor_id character varying(100),
    governor_comment text,
    expert_view numeric DEFAULT 0,
    expert_view_date timestamp with time zone,
    expert_id character varying,
    expert_comment text,
    expert_letter text,
    expeditor_view integer DEFAULT 0,
    expeditor_id character varying(200),
    close integer DEFAULT 0,
    to_print integer DEFAULT 0,
    printed_file_url character varying(200),
    closed integer DEFAULT 0,
    governor_access integer DEFAULT 0,
    expert_access integer DEFAULT 0,
    expeditor_access integer DEFAULT 0,
    director_access integer DEFAULT 0,
    governor_comment_access text,
    expert_comment_access text,
    director_comment_access text,
    ministor_access integer DEFAULT 0,
    ministor_comment_access text,
    status integer DEFAULT 1,
    owner_name character varying(300),
    owner_institute character varying(300),
    owner_phone character varying(100),
    owner_email character varying(200),
    director_comment_date timestamp with time zone,
    expert_comment_date timestamp with time zone,
    ministor_comment_date timestamp with time zone,
    expeditor_view_date timestamp with time zone,
    governor_view_date timestamp with time zone,
    expert_letter_date timestamp with time zone,
    governor_comment_date timestamp with time zone
);


ALTER TABLE public.documents OWNER TO postgres;

--
-- Name: domains; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.domains (
    domain_id bigint NOT NULL,
    domain_name character varying(200),
    status numeric DEFAULT 1
);


ALTER TABLE public.domains OWNER TO postgres;

--
-- Name: domains_domain_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.domains ALTER COLUMN domain_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.domains_domain_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 999999
    CACHE 1
);


--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    role_id bigint NOT NULL,
    role_name character varying,
    access text,
    status numeric DEFAULT 1,
    constant character varying(100)
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: roles_role_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.roles ALTER COLUMN role_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.roles_role_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 9999999
    CACHE 1
);


--
-- Name: user_to_access; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_to_access (
    user_to_access_id bigint NOT NULL,
    user_id character varying(200),
    role_id bigint,
    status numeric DEFAULT 1,
    date timestamp with time zone,
    domain_id bigint
);


ALTER TABLE public.user_to_access OWNER TO postgres;

--
-- Name: user_to_access_user_to_access_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.user_to_access ALTER COLUMN user_to_access_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_to_access_user_to_access_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 999999
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id character varying(200) NOT NULL,
    email character varying(200),
    first_name character varying(200),
    last_name character varying(200),
    middle_name character varying(200),
    password character varying(200),
    status numeric(1,0) DEFAULT 1,
    phone character varying(100)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: documents; Type: TABLE DATA; Schema: public; Owner: postgres
--


--
-- Data for Name: domains; Type: TABLE DATA; Schema: public; Owner: postgres
--


--
-- Name: domains_domain_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.domains_domain_id_seq', 44, true);


--
-- Name: roles_role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_role_id_seq', 10, true);


--
-- Name: user_to_access_user_to_access_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_to_access_user_to_access_id_seq', 12, true);


--
-- Name: documents documents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (document_id);


--
-- Name: domains domains_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.domains
    ADD CONSTRAINT domains_pkey PRIMARY KEY (domain_id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (role_id);


--
-- Name: user_to_access user_to_access_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_to_access
    ADD CONSTRAINT user_to_access_pkey PRIMARY KEY (user_to_access_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- PostgreSQL database dump complete
--

