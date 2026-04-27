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
* __Node:__ `v20.20.2`
* __Run:__ Mon Apr 27 2026 02:33:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 49200.8    | 19.86        | 8.77          |
| connect                  | 3.7.0    | ✗      | 47347.8    | 20.60        | 8.44          |
| kita                     | 1.1.36   | ✓      | 47236.0    | 20.66        | 8.47          |
| fastify                  | 4.29.1   | ✓      | 46828.0    | 20.85        | 8.40          |
| polka                    | 0.5.2    | ✓      | 46480.8    | 21.01        | 8.29          |
| server-base-router       | 7.1.32   | ✓      | 45727.2    | 21.35        | 8.16          |
| rayo                     | 1.4.6    | ✓      | 45610.4    | 21.43        | 8.13          |
| server-base              | 7.1.32   | ✗      | 45594.4    | 21.44        | 8.13          |
| polkadot                 | 1.0.0    | ✗      | 45256.0    | 21.60        | 8.07          |
| connect-router           | 1.3.8    | ✓      | 44768.8    | 21.88        | 7.98          |
| 0http                    | 3.5.3    | ✓      | 43264.0    | 22.61        | 7.72          |
| h3                       | 1.15.11  | ✗      | 43052.0    | 22.73        | 7.68          |
| h3-router                | 1.15.11  | ✓      | 42736.8    | 22.90        | 7.62          |
| restana                  | 4.9.9    | ✓      | 38095.2    | 25.75        | 6.79          |
| koa                      | 2.16.4   | ✗      | 37164.6    | 26.40        | 6.63          |
| hono                     | 4.12.15  | ✓      | 36180.6    | 27.13        | 5.93          |
| take-five                | 2.0.0    | ✓      | 35627.4    | 27.56        | 12.81         |
| restify                  | 11.1.0   | ✓      | 35144.2    | 27.94        | 6.33          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34653.8    | 28.38        | 6.18          |
| koa-router               | 12.0.1   | ✓      | 33548.4    | 29.29        | 5.98          |
| hapi                     | 21.4.8   | ✓      | 32968.8    | 29.81        | 5.88          |
| fastify-big-json         | 4.29.1   | ✓      | 11753.6    | 84.50        | 135.22        |
| express                  | 4.22.1   | ✓      | 11345.4    | 87.55        | 2.02          |
| express-with-middlewares | 4.22.1   | ✓      | 10346.8    | 96.07        | 3.85          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
