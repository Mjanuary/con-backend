PGDMP         /                z            congo-management-db    13.2    13.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    41629    congo-management-db    DATABASE     j   CREATE DATABASE "congo-management-db" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
 %   DROP DATABASE "congo-management-db";
                postgres    false            �            1259    49820 	   documents    TABLE     �  CREATE TABLE public.documents (
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
    DROP TABLE public.documents;
       public         heap    postgres    false            �            1259    41714    domains    TABLE     �   CREATE TABLE public.domains (
    domain_id bigint NOT NULL,
    domain_name character varying(200),
    status numeric DEFAULT 1
);
    DROP TABLE public.domains;
       public         heap    postgres    false            �            1259    41712    domains_domain_id_seq    SEQUENCE     �   ALTER TABLE public.domains ALTER COLUMN domain_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.domains_domain_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 999999
    CACHE 1
);
            public          postgres    false    206            �            1259    41637    roles    TABLE     �   CREATE TABLE public.roles (
    role_id bigint NOT NULL,
    role_name character varying,
    access text,
    status numeric DEFAULT 1,
    constant character varying(100)
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    41635    roles_role_id_seq    SEQUENCE     �   ALTER TABLE public.roles ALTER COLUMN role_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.roles_role_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 9999999
    CACHE 1
);
            public          postgres    false    202            �            1259    41701    user_to_access    TABLE     �   CREATE TABLE public.user_to_access (
    user_to_access_id bigint NOT NULL,
    user_id character varying(200),
    role_id bigint,
    status numeric DEFAULT 1,
    date timestamp with time zone,
    domain_id bigint
);
 "   DROP TABLE public.user_to_access;
       public         heap    postgres    false            �            1259    41699 $   user_to_access_user_to_access_id_seq    SEQUENCE     �   ALTER TABLE public.user_to_access ALTER COLUMN user_to_access_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_to_access_user_to_access_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 999999
    CACHE 1
);
            public          postgres    false    204            �            1259    41630    users    TABLE     L  CREATE TABLE public.users (
    user_id character varying(200) NOT NULL,
    email character varying(200),
    first_name character varying(200),
    last_name character varying(200),
    middle_name character varying(200),
    password character varying(200),
    status numeric(1,0) DEFAULT 1,
    phone character varying(100)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �          0    49820 	   documents 
   TABLE DATA           �  COPY public.documents (document_id, document_code, document_url, document_reference_code, registered_by_id, registered_date, domain_id, priority_id, institute_id, minister_view, minister_view_date, minister_id, minister_comment, cecat_view, cecat_view_date, cecat_id, director_view, director_view_date, director_id, director_comment, governor_view, governor_signed, governor_id, governor_comment, expert_view, expert_view_date, expert_id, expert_comment, expert_letter, expeditor_view, expeditor_id, close, to_print, printed_file_url, closed, governor_access, expert_access, expeditor_access, director_access, governor_comment_access, expert_comment_access, director_comment_access, ministor_access, ministor_comment_access, status, owner_name, owner_institute, owner_phone, owner_email, director_comment_date, expert_comment_date, ministor_comment_date, expeditor_view_date, governor_view_date, expert_letter_date, governor_comment_date) FROM stdin;
    public          postgres    false    207   �'       �          0    41714    domains 
   TABLE DATA           A   COPY public.domains (domain_id, domain_name, status) FROM stdin;
    public          postgres    false    206   T,       �          0    41637    roles 
   TABLE DATA           M   COPY public.roles (role_id, role_name, access, status, constant) FROM stdin;
    public          postgres    false    202   t.       �          0    41701    user_to_access 
   TABLE DATA           f   COPY public.user_to_access (user_to_access_id, user_id, role_id, status, date, domain_id) FROM stdin;
    public          postgres    false    204   f/       �          0    41630    users 
   TABLE DATA           l   COPY public.users (user_id, email, first_name, last_name, middle_name, password, status, phone) FROM stdin;
    public          postgres    false    200   40       �           0    0    domains_domain_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.domains_domain_id_seq', 44, true);
          public          postgres    false    205            �           0    0    roles_role_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.roles_role_id_seq', 10, true);
          public          postgres    false    201            �           0    0 $   user_to_access_user_to_access_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.user_to_access_user_to_access_id_seq', 12, true);
          public          postgres    false    203            a           2606    49827    documents documents_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (document_id);
 B   ALTER TABLE ONLY public.documents DROP CONSTRAINT documents_pkey;
       public            postgres    false    207            _           2606    41718    domains domains_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.domains
    ADD CONSTRAINT domains_pkey PRIMARY KEY (domain_id);
 >   ALTER TABLE ONLY public.domains DROP CONSTRAINT domains_pkey;
       public            postgres    false    206            [           2606    41645    roles roles_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (role_id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    202            ]           2606    41705 "   user_to_access user_to_access_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.user_to_access
    ADD CONSTRAINT user_to_access_pkey PRIMARY KEY (user_to_access_id);
 L   ALTER TABLE ONLY public.user_to_access DROP CONSTRAINT user_to_access_pkey;
       public            postgres    false    204            Y           2606    41647    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    200            �   �  x���as7�?�������VZI��TB.Υ	x �͌g<�;�!5\����aI���I��z�}�D	�Yϕ՚����@n��BJc�H!�2R�%X�"(ɱ4��P�����.��l���������Ua���KD]�*�Q%/J[�R(�J������9&E� 6FT?
a���a�s$2�TC
��sh�`�HA�a��픣��A�B�2�Q��#�g�F�a��]5ME1�qK=�Z�fUS�.~���5���Ҥ`�D§�w)�����y�ɇ�d:���ϲ�w:�5f���$��i��7��i7�<��ao2:�\n&�{���|�M/G/^䃬��!{��p��_g���!z���q=/CD���o�1&����&�M�M����)C�rwk�G�B;��hk+k��k�*�I��6\'I�Pb��h���2��F^[sL0�E��BU�� e��t|<���N�T�X�rs��#�V��nV���|9�Y7���Lc��h�����y��$�qgh��55[�+�͚�͢c%P�Gl%�nA;a��a��Ϧ�~A��(�ر���b��!��D`��=��o���8�%gg~���D��Y�%Qt�������~~�푦d�e�v݌$i���^Ĳ�s��{�]l���(E�&��C۫��Lin�U��{)�
��q+B:��न+��Jk ��3T"�sIiM�O�޲��;�t�Su�6�W� ��8�Ink��R��v:�:ƍ!<1��|J*�w�]�%��m����/?�ÊQR������ʦ
)�K���j�`�bW�����t-�O*�`���mOU��e��l������&;��xt:�&���D��Nat��ϑ$���$mc�%/lg$1`��S�[�)$�:�	�HRaRM8%����䯨DYjj��N�G
�([`����`�����'�\��<���-�NPko�|��u�$x����⋄t4P��.W���v�}�o[�7����(:]����Y�k�C�`��;�9n��l?'I��e��*�Brok*4^`���E��KJM]y�.p��f��=L��P>�q>�~M�ѕ!�RP� ��s<���r�]td�x׼k؟�@1��>6�lv;�=l�5�|d�P_��m�����{�Z����KQ���(v�#�^i\���\�'''� l8      �     x�eSKn�0]�O�%���k'jԈ������; E:�͍�^C�Rj��|޼y�$�SwSh����d��
�MK�<�S�hbq@�(Xr�5�-r���s_]��ţ&Ł)�͕�5[��N�.�o��+۶ѐz=��e\ߦ1X���Cdt�cXk��s�*a��V?Ri)�&W��r�3���;�L[2<��>t7��r/x����kdNf�O��It>5M��g���o��Q���Lk��g��VIwd�9?�u��Z.����mwkH�b1��4�����lI�,<�a=�|mN2�+*X2qx�B����WII1���$�~��[ERgNb
OY��g�O'�j|��ɥ蜗Vְ�ȋl�H�2J5���	���*ak��n�,&�`}��Ϧ���Ū*�a�Z'��|1�%^�}Okfa۾e;-�[��16gL:T�~��s0cn�g��o�^x���������[�~�ת�{jc��',��f؅�h�����4�����j�搌���h4��C      �   �   x�u�_j�0���S�K��1u�bh�a;c�B�R?�3{�J=G/6g$�&���'�vλ!LQi
�q���
��w�/jjM*szy"ep	�>}��m
�L�j���mΧغ�AS.M�^���L�Ż�|>\t���h���R�5}.�]A�Z7?{(|�U
�M�CZt��6Ό�2�\�9#|�����цYH
M|��Ê+��5]��9PqEl|��� La      �   �   x���;n!�z8���W~c�,� ����(U�`��ҧ�6|h_�H8HP�ѡkWh5���m]|�S�̀
�/l'�i��_��������[�=��� ��	c���u�u��h��D���t�An`]�j]���:�B<��=N�u$��w��9G���;(r���9<J^�wP�9u��_w��]J��0��      �   Z  x�U�OO�0 �s�\�;ڛ�!���0�xiK7q 2L?�C��;�w��)Pa��2j,4v`�E����830�M��6��+wz����D�@���4R�����:�G�%��Q�?�����V3d_J��$_�,��e:z�,��i�D����y��0 ���ô[S*<H��q��f�A9Ʋ�nM.����+S�E^U��*R���T��)jۦ�g>	ڏ|V�^??W/�����ǯ���>j�轘O���,d����	" ���{r�$cg��@o7��;,����_�����T-�o������קD���c��2;�0Z��C�1���2�-�n*~c��:�����q     