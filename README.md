# webApplication# steps for creating NodeJs Express And Mongo Db with store procedure project (Typescript)

## Step 1: 

```
    **You need to create git repository first (an empty one) and clone it to local**

```

## Step 2: 

```
    **Need to npm init and create package file**
        npm init

```

## Step 3: 

```
    **Need to install typescript as dev dependency**
        npm install --save-dev typescript

```

## Step 4: 

```
    **Now create tsconfig through**
        npx tsc --init

    And provide values 
    ex: {
        "compilerOptions": {
            "target": "es6",
            "module": "commonjs",
            "moduleResolution": "node",
            "sourceMap": true,
            "rootDir": "./src",
            "outDir": "dist",
            "esModuleInterop": true,
            "forceConsistentCasingInFileNames": true,
            "useUnknownInCatchVariables": false,
            "strict": true,
            "skipLibCheck": true
        },
        "lib": ["es2015"],
        "exclude": [
            "node_modules"
        ],
        "include": [
            "./src/**/*.ts"
        ]
    }

```
## Step 5:

```
    **Now install base packages which need for nodejs express as dependency**
        npm i body-parser dotenv express helmet cors

    **Now the development dependency**
        npm install --save-dev @types/body-parser @types/express @types/node @types/cors nodemon rimraf
```


```
    **Now you can configure TypeScript linting for the project. First, we install eslint using npm**
        npm install --save-dev eslint
        npx eslint --init
    Answer the following questions
    Ex.

        How would you like to use ESLint? :------> To check syntax and find problems
        What type of modules does your project use? :------> JavaScript modules (import/export)
        Which framework does your project use? :------> None of these
        Does your project use TypeScript? :------> Yes
        Where does your code run? :------> Node
        What format do you want your config file to be in? :------> JSON
```

```
    **This will help in proper typescript format**
    Run the linter to check all files with the .ts TypeScript extension
        npx eslint . --ext .ts

```


```
{
    "gstin": "27AABCF9205A1Z3",
    "total_amt": 210,
    "cgst_tax_amt": 1,
    "cgst_int_amt": 2,
    "cgst_pen_amt": 3,
    "cgst_fee_amt": 4,
    "cgst_oth_amt": 5,
    "igst_tax_amt": 6,
    "igst_int_amt": 7,
    "igst_pen_amt": 8,
    "igst_fee_amt": 9,
    "igst_oth_amt": 10,
    "cess_tax_amt": 11,
    "cess_int_amt": 12,
    "cess_pen_amt": 13,
    "cess_fee_amt": 14,
    "cess_oth_amt": 15,
    "sgst_tax_amt": 16,
    "sgst_int_amt": 17,
    "sgst_pen_amt": 18,
    "sgst_fee_amt": 19,
    "sgst_oth_amt": 20,
    "bank_cd": "SBIN"
}
```


```
[
    "ABHY",
    "ADCB",
    "ABPB",
    "AMCB",
    "AMDN",
    "AIRP",
    "AKJB",
    "ALLA",
    "AUCB",
    "AJHC",
    "ANDB",
    "APGV",
    "APGB",
    "ASBL",
    "ARBL",
    "AUBL",
    "ANZB",
    "UTIB",
    "BNPA",
    "BDBL",
    "IBBK",
    "BOFA",
    "BBKM",
    "BARB",
    "BCEY",
    "BKID",
    "MAHB",
    "BOTM",
    "BARA",
    "BARC",
    "BACB",
    "BNSB",
    "BCBM",
    "BMBL",
    "BMCB",
    "CNRB",
    "CLBL",
    "CSBK",
    "CBIN",
    "CRGB",
    "CTCB",
    "CITI",
    "CCBL",
    "CIUB",
    "COAS",
    "CTBA",
    "CORP",
    "CRLY",
    "CRES",
    "DCUB",
    "DBSS",
    "DCBB",
    "BKDN",
    "DEOB",
    "DICG",
    "DEUT",
    "DBOS",
    "DCBL",
    "DLXB",
    "DMKJ",
    "DOHB",
    "DOHA",
    "DNSB",
    "DURG",
    "EBIL",
    "ESFB",
    "ESMF",
    "EIBI",
    "EXIB",
    "FDRL",
    "FSFB",
    "FINO",
    "FIRN",
    "PJSB",
    "GGBK",
    "HARC",
    "HDFC",
    "HPSC",
    "HSBC",
    "HUSB",
    "ICIC",
    "IBKL",
    "IDFB",
    "IDUK",
    "IPOS",
    "IDIB",
    "IOBA",
    "INDB",
    "ICBK",
    "IBKO",
    "VYSA",
    "ITBL",
    "JJSB",
    "JAKA",
    "JSFB",
    "JSBL",
    "JASB",
    "JANA",
    "JSBP",
    "JTSC",
    "JIOP",
    "CHAS",
    "KAIJ",
    "KCCB",
    "KJSB",
    "KCBL",
    "KARB",
    "KVGB",
    "KVBL",
    "KGRB",
    "KOEX",
    "KLGB",
    "KBKB",
    "KKBK",
    "KDCB",
    "KRTH",
    "LAVB",
    "MCBL",
    "MAHG",
    "MSCI",
    "MSBL",
    "MSHQ",
    "MHCB",
    "MDBK",
    "NUCB",
    "NGSB",
    "NATA",
    "NBRD",
    "NBAD",
    "NJBK",
    "NICB",
    "NKGS",
    "NESF",
    "NSPB",
    "NNSB",
    "ORBC",
    "ORCB",
    "PSBL",
    "PYTM",
    "PKGB",
    "PRTH",
    "PMEC",
    "PTBI",
    "PMCB",
    "PSIB",
    "PUNB",
    "QNBA",
    "RABO",
    "RRBP",
    "RSSB",
    "RMGB",
    "RSBL",
    "RNSB",
    "RDCB",
    "RATN",
    "RBLB",
    "RBIS",
    "SAHE",
    "SBLS",
    "SANT",
    "SNBK",
    "SRCB",
    "SDCE",
    "TSSB",
    "SGBA",
    "SABR",
    "SBMB",
    "SKSB",
    "SHBK",
    "SMCB",
    "SKNB",
    "CRUB",
    "SVSH",
    "MVCB",
    "SIDB",
    "SMNB",
    "SOGE",
    "SJSB",
    "SIBL",
    "SECB",
    "SCBL",
    "SBIN",
    "STCB",
    "SUSB",
    "SMBC",
    "SUNB",
    "SURY",
    "SUTB",
    "SYNB",
    "TMBL",
    "TSAB",
    "TTCB",
    "APMC",
    "AHDC",
    "AJAR",
    "ADCC",
    "TAUB",
    "APBL",
    "TBMC",
    "NOSC",
    "COSB",
    "DLSC",
    "GDCB",
    "GBCB",
    "GSCB",
    "HCBL",
    "JPCB",
    "KACE",
    "KANG",
    "KUCB",
    "KSCB",
    "KSBK",
    "KOLH",
    "KNSB",
    "TMSB",
    "MKPB",
    "MSNU",
    "MDCB",
    "MUBL",
    "MSLM",
    "NTBL",
    "NMCB",
    "NVNM",
    "TNCB",
    "NCUB",
    "PUCB",
    "TPSC",
    "PUSD",
    "RSCB",
    "ABNA",
    "SVBL",
    "SVCB",
    "SIDC",
    "SDCB",
    "SPCB",
    "TNSC",
    "TBSB",
    "TDCB",
    "UUCB",
    "URBN",
    "VARA",
    "VCOB",
    "VSBL",
    "WBSC",
    "ZCBL",
    "THRS",
    "TJSB",
    "TGMB",
    "UCBA",
    "UJVN",
    "UBIN",
    "UTBI",
    "UOVB",
    "UTKS",
    "UPCB",
    "VASJ",
    "VVSB",
    "VIJB",
    "WPAC",
    "HVBK",
    "YESB",
    "ZSBL"
]

```