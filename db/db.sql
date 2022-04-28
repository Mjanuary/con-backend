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

COPY public.documents (document_id, document_code, document_url, document_reference_code, registered_by_id, registered_date, domain_id, priority_id, institute_id, minister_view, minister_view_date, minister_id, minister_comment, cecat_view, cecat_view_date, cecat_id, director_view, director_view_date, director_id, director_comment, governor_view, governor_signed, governor_id, governor_comment, expert_view, expert_view_date, expert_id, expert_comment, expert_letter, expeditor_view, expeditor_id, close, to_print, printed_file_url, closed, governor_access, expert_access, expeditor_access, director_access, governor_comment_access, expert_comment_access, director_comment_access, ministor_access, ministor_comment_access, status, owner_name, owner_institute, owner_phone, owner_email, director_comment_date, expert_comment_date, ministor_comment_date, expeditor_view_date, governor_view_date, expert_letter_date, governor_comment_date) FROM stdin;
c421e97a-3755-4a29-b9b4-6aa502266645	0002/22	36bec174-0e32-4c60-aefc-f1e4491fc2ae-Profile (1).pdf	444444	2980fce5-6430-43bc-bc7b-c035edd2eb7b	2022-04-16 20:31:07.443+02	4	3	\N	1	2022-04-24 11:51:11.038+02	\N	\N	1	2022-04-24 10:12:07.975+02	2980fce5-6430-43bc-bc7b-c035edd2eb7b	1	2022-04-24 13:03:28.409+02	2980fce5-6430-43bc-bc7b-c035edd2eb7b	this is very good	1	1	2980fce5-6430-43bc-bc7b-c035edd2eb7b	this is a great document data	1	2022-04-25 16:26:17.821+02	\N	\N	\N	1	\N	0	1	\N	0	1	1	1	1	MINISTOR,EXPERT,GOVENEUR,SECRETARY,CECAT,EXPEDITION,SOUS_GOVENER,CABINET_OFFICE	\N	MINISTOR,EXPERT,GOVENEUR,SECRETARY,CECAT,EXPEDITION,SOUS_GOVENER,CABINET_OFFICE,CONSEILLER	1	\N	1	James alice				2022-04-24 11:11:54.483+02	\N	\N	2022-04-24 11:10:46.561+02	2022-04-25 16:26:36.449+02	\N	2022-04-21 10:41:36.96+02
577d76db-5a9d-4740-ac56-588e71c4f570	0004/22	cee11bf4-c67f-4848-bf31-b03d96f12b37-Profile.pdf		2980fce5-6430-43bc-bc7b-c035edd2eb7b	2022-04-19 10:27:32.52+02	4	2	\N	0	\N	2980fce5-6430-43bc-bc7b-c035edd2eb7b	this is good for a ministor	1	2022-04-24 11:22:14.126+02	2980fce5-6430-43bc-bc7b-c035edd2eb7b	0	\N	2980fce5-6430-43bc-bc7b-c035edd2eb7b	haha and very good	1	0	2980fce5-6430-43bc-bc7b-c035edd2eb7b	this is one of the best comment ever	0	\N	2980fce5-6430-43bc-bc7b-c035edd2eb7b	I'm an expert	\N	0	\N	0	0	\N	0	1	0	0	1	MINISTOR,EXPERT,GOVENEUR,SECRETARY, ,EXPEDITION,SOUS_GOVENER,CABINET_OFFICE	MINISTOR, ,GOVENEUR,SECRETARY,CECAT,EXPEDITION,SOUS_GOVENER,CABINET_OFFICE	 ,EXPERT, ,SECRETARY,CECAT, ,SOUS_GOVENER, 	0	 ,EXPERT,GOVENEUR,SECRETARY,CECAT,EXPEDITION,SOUS_GOVENER,CABINET_OFFICE	1	KIRIKU Patrick	RDC	9832408324023	patrick@gmail.com	2022-04-21 10:32:32.73+02	2022-04-21 10:38:26.41+02	2022-04-21 10:31:50.296+02	\N	2022-04-25 16:26:39.659+02	\N	2022-04-25 16:38:56.706+02
17c51520-43b4-4a10-871a-43485c3d8a66	0006/22	6d1dd36a-d790-47cb-84a7-39d3bc94a306-THE TWIS REST API DOCS.pdf	0012/22	2980fce5-6430-43bc-bc7b-c035edd2eb7b	2022-04-26 08:37:54.697+02	\N	\N	\N	0	\N	\N	\N	1	\N	\N	0	\N	\N	\N	0	0	\N	\N	0	\N	\N	\N	\N	0	\N	0	0	\N	0	0	0	0	0	\N	\N	\N	0	\N	1	KAKURU Janvier		9283472934	janvier@gmail.com	\N	\N	\N	\N	\N	\N	\N
8f32a0ce-d3b9-4fb2-a7f6-1a04f47cf0d9	0001/22	f36bb49e-a431-40e0-bbe0-6c91b051cef1-DOC-PRINT.pdf		2980fce5-6430-43bc-bc7b-c035edd2eb7b	2022-04-16 20:29:13.017+02	4	2	\N	0	\N	\N	\N	1	\N	2980fce5-6430-43bc-bc7b-c035edd2eb7b	0	\N	\N	\N	1	1	2980fce5-6430-43bc-bc7b-c035edd2eb7b	jojo wherea are you huhu	1	2022-04-25 16:25:10.415+02	\N	\N	\N	0	\N	0	0	\N	0	1	0	0	1	MINISTOR,EXPERT,GOVENEUR,SECRETARY,CECAT,EXPEDITION,SOUS_GOVENER,CABINET_OFFICE	\N	\N	0	\N	1	James CEDRIK			james@gmail.com	\N	\N	\N	\N	2022-04-25 16:26:33.275+02	\N	2022-04-20 21:44:32.692+02
5f1d1241-7197-42e4-ae2b-314694403ee4	0007/22	467bee00-da01-41e9-a968-856d778591d1-THE TWIS REST API DOCS.pdf	0012/22	2980fce5-6430-43bc-bc7b-c035edd2eb7b	2022-04-26 08:45:21.973+02	4	1	\N	0	\N	\N	\N	1	2022-04-26 08:46:41.975+02	2980fce5-6430-43bc-bc7b-c035edd2eb7b	1	2022-04-26 08:49:08.494+02	2980fce5-6430-43bc-bc7b-c035edd2eb7b	this is very good	1	0	2980fce5-6430-43bc-bc7b-c035edd2eb7b	this is a good progress	0	\N	\N	\N	\N	0	\N	0	0	\N	0	1	1	1	1	MINISTOR,EXPERT,GOVENEUR,SECRETARY,CECAT,EXPEDITION,SOUS_GOVENER,CABINET_OFFICE,CONSEILLER,DIRECTOR	\N	 , ,GOVENEUR, , , , , , ,DIRECTOR CECAT  MINISTOR  EXPERT  SECRETARY  EXPEDITION 	0	\N	1	ALEXI James	Hotel Grand lake	9283472934	janvier@gmail.com	2022-04-26 08:50:08.346+02	\N	\N	\N	2022-04-26 08:51:16.221+02	\N	2022-04-26 08:52:09.895+02
a3d0e335-7130-416f-a203-db41f1a69a4d	0012/22	4e920fd9-fd2b-4f18-b996-13803998c76b-Government Prices.pdf	0001/22	2980fce5-6430-43bc-bc7b-c035edd2eb7b	2022-04-16 20:12:54.641+02	4	1	\N	0	\N	\N	\N	1	2022-04-24 10:15:25.421+02	2980fce5-6430-43bc-bc7b-c035edd2eb7b	0	\N	2980fce5-6430-43bc-bc7b-c035edd2eb7b	director_comment_date	1	1	2980fce5-6430-43bc-bc7b-c035edd2eb7b	hello janvier 0122\nDocument code: 0012/22\ng	1	2022-04-24 14:42:14.277+02	\N	\N	\N	1	\N	0	1	\N	0	1	1	0	0	MINISTOR,EXPERT,GOVENEUR,SECRETARY, ,EXPEDITION,SOUS_GOVENER,CABINET_OFFICE CECAT 	\N	MINISTOR,EXPERT,GOVENEUR,SECRETARY,CECAT,EXPEDITION,SOUS_GOVENER,CABINET_OFFICE	0	\N	1	KAKURU Janvier	PROGRESS	9283472934	janvier@gmail.com	2022-04-20 21:32:57.7+02	\N	\N	2022-04-24 11:21:38.148+02	2022-04-24 14:54:18.36+02	\N	2022-04-24 08:06:59.684+02
e480319b-4374-42c5-ae62-957d705e30cd	0005/22	3e607eb7-9a85-413a-81d4-101f8455a716-Profile.pdf		2980fce5-6430-43bc-bc7b-c035edd2eb7b	2022-04-24 11:55:29.789+02	\N	\N	\N	0	\N	\N	\N	1	2022-04-24 11:55:51.739+02	\N	0	\N	\N	\N	0	0	\N	\N	0	\N	\N	\N	\N	0	\N	0	0	\N	0	0	0	0	0	\N	\N	\N	0	\N	1	James KEVIN	Grand Hotel	9238492384	james@gmail.com	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: domains; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.domains (domain_id, domain_name, status) FROM stdin;
2	Décentralisation	1
3	Administration du Territoire	1
4	Sécurité	1
5	Ordre Public	1
6	Environnement	1
7	Transport et Voies de Communication	1
8	Tourisme	1
9	Agriculture 	1
10	Elevage 	1
11	Pêche	1
12	Développement Rural	1
13	Mines et Géologie	1
14	Statistiques et qualification des sites miniers	1
15	Ressources Hydrauliques	1
16	Energie	1
17	Hydrocarbures	1
18	Education	1
19	Communication et Médias	1
20	Santé	1
21	Famille	1
22	Genre et Enfant	1
23	Culture et Arts	1
24	Travail	1
25	Affaires Sociales	1
26	Jeunesse	1
27	Sports et Loisir	1
28	Reconstruction	1
29	Finances	1
30	Portefeuille	1
31	Mobilisation des Recettes	1
32	Industrie	1
33	Petites et Moyennes entreprises	1
34	Economie	1
35	Plan	1
36	Budget	1
37	Travaux Publics	1
38	Commerce	1
39	Justice	1
40	Affaires Coutumières	1
41	Affaires Foncières	1
42	Aménagement du Territoire	1
43	Urbanisme	1
44	Habitat	1
1	 	1
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (role_id, role_name, access, status, constant) FROM stdin;
4	Ministre	CREATE	1	MINISTOR
1	Expert	CREATE_USER	1	EXPERT
2	Gouverneur	CREATE_USER	1	GOVENEUR
7	Secrétaire	CREATE	1	SECRETARY
6	Expédition	CREATE	1	EXPEDITION
8	Bureau du cabinet	CREATE	1	CABINET_OFFICE
9	Conseiller	CREATE	1	CONSEILLER
10	Directeur	CREATE	1	DIRECTOR
5	Secrétaire Administratif (Secad)	CREATE	1	CECAT
3	Vice- Gouverneur	CREATE_USER	1	SOUS_GOVENER
\.


--
-- Data for Name: user_to_access; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_to_access (user_to_access_id, user_id, role_id, status, date, domain_id) FROM stdin;
2	4aed3386-3819-45ba-a4a4-9786119f9ed2	1	1	2022-04-14 09:15:56.878+02	1
4	4aed3386-3819-45ba-a4a4-9786119f9ed2	3	1	2022-04-14 09:15:56.878+02	4
1	2980fce5-6430-43bc-bc7b-c035edd2eb7b	1	1	2022-04-14 09:15:56.878+02	4
5	0bcb11c2-6828-4c0f-8165-5a49447ec181	1	1	2022-04-16 00:30:30.877+02	4
3	2980fce5-6430-43bc-bc7b-c035edd2eb7b	2	1	2022-04-14 09:15:56.878+02	1
7	2980fce5-6430-43bc-bc7b-c035edd2eb7b	4	1	2022-04-14 09:15:56.878+02	4
10	2980fce5-6430-43bc-bc7b-c035edd2eb7b	8	1	2022-04-14 09:15:56.878+02	4
8	2980fce5-6430-43bc-bc7b-c035edd2eb7b	5	1	2022-04-14 09:15:56.878+02	1
6	2980fce5-6430-43bc-bc7b-c035edd2eb7b	3	1	2022-04-14 09:15:56.878+02	1
11	2980fce5-6430-43bc-bc7b-c035edd2eb7b	6	1	2022-04-14 09:15:56.878+02	1
9	2980fce5-6430-43bc-bc7b-c035edd2eb7b	7	1	2022-04-14 09:15:56.878+02	1
12	2980fce5-6430-43bc-bc7b-c035edd2eb7b	10	1	2022-04-14 09:15:56.878+02	1
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, email, first_name, last_name, middle_name, password, status, phone) FROM stdin;
2980fce5-6430-43bc-bc7b-c035edd2eb7b	janvier@gmail.com	MUHAWENIMANA	Janvier	Kakuru	$2a$10$DwZf9zCSHw3kJ0chLgbt5OZVbYZ.DgSCPGUgNTBtMkRqKSXZtOWte	1	234234234
4aed3386-3819-45ba-a4a4-9786119f9ed2	james@gmail.com	MAZIMAKA	James	KAMARI	$2a$10$goZI0xxtkaw5GHxpZJkq6./ZvberU/e0x94AL25EhrToFMx9CnfRG	1	234234234234
0bcb11c2-6828-4c0f-8165-5a49447ec181	alice@gmail.com	MUKESHA	Alice	Karabo	$2a$10$x1FElzKkyc/9DNrvOADijuSOqOgYqu9BMU80l3B2HrN1DYYc4AYVy	1	2342354234234
\.


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

