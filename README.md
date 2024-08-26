<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.16.0`
* __Run:__ Mon Aug 26 2024 01:21:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 45611.2    | 21.40        | 8.13          |
| bare                     | v20.16.0 | ✗      | 45524.0    | 21.46        | 8.12          |
| fastify                  | 4.28.1   | ✓      | 45412.8    | 21.50        | 8.14          |
| rayo                     | 1.4.6    | ✓      | 45110.4    | 21.69        | 8.04          |
| kita                     | 1.1.36   | ✓      | 44922.4    | 21.78        | 8.05          |
| connect                  | 3.7.0    | ✗      | 44440.0    | 22.00        | 7.92          |
| polkadot                 | 1.0.0    | ✗      | 44332.0    | 22.07        | 7.91          |
| server-base-router       | 7.1.32   | ✓      | 44250.4    | 22.09        | 7.89          |
| server-base              | 7.1.32   | ✗      | 44087.2    | 22.18        | 7.86          |
| connect-router           | 1.3.8    | ✓      | 41814.4    | 23.43        | 7.46          |
| h3                       | 1.12.0   | ✗      | 41192.0    | 23.77        | 7.35          |
| 0http                    | 3.5.3    | ✓      | 39703.2    | 24.70        | 7.08          |
| h3-router                | 1.12.0   | ✓      | 38719.2    | 25.32        | 6.91          |
| hono                     | 4.5.8    | ✓      | 38549.6    | 25.44        | 6.87          |
| koa                      | 2.15.3   | ✗      | 35647.8    | 27.55        | 6.36          |
| restana                  | 4.9.9    | ✓      | 35359.6    | 27.78        | 6.31          |
| take-five                | 2.0.0    | ✓      | 34093.0    | 28.82        | 12.26         |
| restify                  | 11.1.0   | ✓      | 33892.4    | 29.03        | 6.11          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33042.4    | 29.75        | 5.89          |
| koa-router               | 12.0.1   | ✓      | 31955.2    | 30.80        | 5.70          |
| hapi                     | 21.3.10  | ✓      | 30280.0    | 32.52        | 5.40          |
| fastify-big-json         | 4.28.1   | ✓      | 11647.8    | 85.29        | 134.01        |
| express                  | 4.19.2   | ✓      | 10656.6    | 93.21        | 1.90          |
| express-with-middlewares | 4.19.2   | ✓      | 10088.2    | 98.55        | 3.75          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
